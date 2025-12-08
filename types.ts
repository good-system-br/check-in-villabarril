import { LucideIcon } from 'lucide-react';

export interface InfoSection {
  id: string;
  title: string;
  content: string;
  icon: LucideIcon;
  highlight?: boolean; // For critical alerts like fines
}

export interface ContactInfo {
  phone: string;
  whatsappRaw: string; // For linking
  address: string;
  mapEmbedUrl: string;
}