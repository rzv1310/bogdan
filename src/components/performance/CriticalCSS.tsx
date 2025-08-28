import { useCriticalCSS } from '@/hooks/useCriticalCSS';

export default function CriticalCSS() {
  useCriticalCSS();
  return null; // This component only injects CSS, no visual output
}