import { LucideIcon } from 'lucide-react';

export interface InfoSection {
  id: string;
  title: string;
  content: string;
  icon: LucideIcon;
  highlight?: boolean; // For critical alerts like fines
  isUrgent?: boolean; // For time-sensitive services
  deadline?: string; // Deadline text (e.g., "Até 10:00")
  externalLink?: string; // External URL for actions
  buttonText?: string; // Text for external link button
  copyableText?: string; // Text that can be copied (e.g., WiFi password)
  copyLabel?: string; // Label for the copyable text
}

export interface ContactInfo {
  phone: string;
  whatsappRaw: string; // For linking
  address: string;
  mapEmbedUrl: string;
}