import { Linkedin, Twitter, Instagram, Facebook, Youtube, MapPin, Music, Pin } from "lucide-react";

export const SOCIAL_LINKS = [
  { href: "http://linkedin.com/in/bogdan-lamatic-b36a2a1b8", label: "LinkedIn", Icon: Linkedin },
  { href: "https://x.com/BogdanLamatic", label: "X (Twitter)", Icon: Twitter },
  { href: "https://www.instagram.com/bogdanlamatic/", label: "Instagram", Icon: Instagram },
  { href: "https://www.facebook.com/profile.php?id=61580770400222", label: "Facebook", Icon: Facebook },
  { href: "https://www.youtube.com/@AvocatBogdanLamatic-DreptPenal", label: "YouTube", Icon: Youtube },
  { href: "https://maps.app.goo.gl/V5Fi3ojd24VDrARe8", label: "Google Maps", Icon: MapPin },
  { href: "https://www.tiktok.com/@avocatdreptpenal", label: "TikTok", Icon: Music },
  { href: "https://ro.pinterest.com/AvocatDreptPenalBogdanLamatic/", label: "Pinterest", Icon: Pin },
];

export function SocialLinks({ className = "", linkClassName = "" }: { className?: string; linkClassName?: string }) {
  return (
    <div className={className}>
      {SOCIAL_LINKS.map(({ href, label, Icon }) => (
        <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className={linkClassName}>
          <Icon size={24} />
        </a>
      ))}
    </div>
  );
}
