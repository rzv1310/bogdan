// Script to remove target="_blank" from all files
const fs = require('fs');
const path = require('path');

// List of files containing target="_blank"
const filesToUpdate = [
  'src/pages/About.tsx',
  'src/pages/en/services/money-laundering-and-asset-concealment.tsx',
  'src/pages/en/services/corruption-and-public-office-offenses.tsx',
  'src/pages/en/services/crypto-asset-investigations.tsx',
  'src/pages/en/services/drug-offenses.tsx',
  'src/pages/en/services/financial-crime.tsx',
  'src/pages/en/services/professional-negligence-and-malpractice.tsx',
  'src/pages/en/services/road-traffic-offenses.tsx',
  'src/pages/en/services/victim-representation-in-criminal-cases.tsx',
  'src/pages/en/services/workplace-criminal-liability.tsx',
  'src/pages/services/cauze-penale-privind-droguri.tsx',
  'src/pages/services/criminalitate-economica.tsx',
  'src/pages/services/raspundere-penala-incidente-locul-de-munca.tsx',
  'src/pages/services/reprezentarea-victimelor-in-procese-penale.tsx',
  'src/pages/services/spalare-de-bani-si-ascundere-de-bunuri.tsx'
];

// Function to update a file
function updateFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove target="_blank" while keeping rel attributes
    content = content.replace(/target="_blank"\s+rel="/g, 'rel="');
    content = content.replace(/\s+target="_blank"/g, '');
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated: ${filePath}`);
  } catch (error) {
    console.log(`Skipped (not found): ${filePath}`);
  }
}

// Update all files
filesToUpdate.forEach(updateFile);

console.log('All target="_blank" attributes removed!');
