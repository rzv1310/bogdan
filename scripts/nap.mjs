/** Canonical NAP (name, address, phone) used by every JSON-LD block. */
export const NAP = {
  businessName: "Avocat Bogdan Lamatic - Drept Penal Bucuresti",
  personName: "Bogdan Lamatic",
  telephone: "+40745506443",
  streetAddress: "Strada Colonel Stefan Stoika 22",
  addressLocality: ["București", "Bucuresti", "Bucharest"],
  postalCode: "012244",
  addressCountry: "RO",
};

const types = (node) => (Array.isArray(node["@type"]) ? node["@type"] : [node["@type"]]);

/** Walks a parsed JSON-LD payload and returns NAP mismatch messages. */
export function checkNap(payload) {
  const problems = [];
  const walk = (node, where, parentKey) => {
    if (Array.isArray(node)) return node.forEach((n, i) => walk(n, `${where}[${i}]`, parentKey));
    if (!node || typeof node !== "object") return;
    const t = types(node);
    if ("telephone" in node && node.telephone !== NAP.telephone)
      problems.push(`${where}.telephone is "${node.telephone}", expected "${NAP.telephone}"`);
    if (t.includes("PostalAddress")) {
      for (const key of ["streetAddress", "postalCode", "addressCountry"])
        if (node[key] !== NAP[key]) problems.push(`${where}.${key} is "${node[key]}", expected "${NAP[key]}"`);
      if (!NAP.addressLocality.includes(node.addressLocality))
        problems.push(`${where}.addressLocality is "${node.addressLocality}"`);
    }
    // The main business entity: the #legalservice node and the Contact page Attorney.
    // Service pages name their LegalService after the service, so they are not checked here.
    const isBusiness =
      String(node["@id"] || "").endsWith("#legalservice") ||
      (t.includes("Attorney") && "address" in node && parentKey !== "provider");
    if (isBusiness && "name" in node && node.name !== NAP.businessName)
      problems.push(`${where}.name is "${node.name}", expected "${NAP.businessName}"`);
    const isLawyer = parentKey === "provider" || String(node["@id"] || "").endsWith("#person");
    if (isLawyer && "name" in node && node.name !== NAP.personName)
      problems.push(`${where}.name is "${node.name}", expected "${NAP.personName}"`);
    for (const [key, value] of Object.entries(node))
      // Reviews carry client names, not NAP data.
      if (key !== "review" && value && typeof value === "object") walk(value, `${where}.${key}`, key);
  };
  walk(payload, "$", null);
  return problems;
}
