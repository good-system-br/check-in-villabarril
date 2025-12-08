import { 
  CreditCard, 
  Clock, 
  Coffee, 
  Sparkles, 
  Wifi, 
  ShieldAlert, 
  Dog, 
  VolumeX, 
  AlertTriangle, 
  Search, 
  Phone,
  MapPin
} from 'lucide-react';
import { InfoSection, ContactInfo } from './types';

export const APP_INFO = {
  name: "POUSADA VILLA BARRIL",
  subtitle: "GUIA DO HÓSPEDE"
};

export const CONTACT_INFO: ContactInfo = {
  phone: "35 91017-2566",
  whatsappRaw: "5535910172566",
  address: "Villas de Monte Verde III - Rua Três, Monte Verde, Camanducaia - MG, 37650-000, Brasil",
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3674.488794!2d-46.080791!3d-22.854601!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjLCsDUxJzE2LjYiUyA0NsKwMDQnNDMuMCJX!5e0!3m2!1spt-BR!2sbr!4v1698765432100!5m2!1spt-BR!2sbr"
};

export const SECTIONS: InfoSection[] = [
  {
    id: 'estorno',
    title: 'Política de Estorno',
    icon: CreditCard,
    content: "Em caso de não comparecimento sem aviso, será cobrado o valor total. Cancelamentos dentro do prazo recebem estorno em até 7 dias. Reembolso total ao cancelar em até 7 dias após a confirmação da reserva (ART.49 CDC). Após esse período, não há reembolso."
  },
  {
    id: 'checkin',
    title: 'Check-in e Check-out',
    icon: Clock,
    content: `Check-in: A partir das 15:00 (apresentar documentos).\nCheck-out: Até 12:00.\nLate-checkout: consultar disponibilidade e valores.\nRecepção: 8:00 às 23:00.`
  },
  {
    id: 'cafe',
    title: 'Café da Manhã',
    icon: Coffee,
    content: "Servido no quarto com hora marcada. Solicitar via recepção ou mensagem. Cardápio será enviado."
  },
  {
    id: 'arrumacao',
    title: 'Arrumação do Quarto',
    icon: Sparkles,
    content: "Solicitar antes das 14:00."
  },
  {
    id: 'wifi',
    title: 'Wi-Fi',
    icon: Wifi,
    content: "Senha: cadubela"
  },
  {
    id: 'regras',
    title: 'Regras e Políticas',
    icon: ShieldAlert,
    content: "Proibido uso de DRONE.\nProibido fumar dentro da acomodação; caso seja identificado cheiro, será cobrada 1 diária extra.\nPets: sempre acompanhar; diária R$150,00."
  },
  {
    id: 'pet',
    title: 'Pet Friendly',
    icon: Dog,
    content: "Seu pet é bem-vindo! Lembre-se de mantê-lo sempre acompanhado. Taxa de diária: R$150,00."
  },
  {
    id: 'convivencia',
    title: 'Regras de Convivência',
    icon: VolumeX,
    content: "Silêncio após 22h e antes de 08h.\nProibido som alto nas áreas comuns.\nAcesso apenas a hóspedes registrados."
  },
  {
    id: 'danos',
    title: 'Danos e Avarias',
    icon: AlertTriangle,
    content: "Cuidados com a Acomodação: Danos serão cobrados no check-out."
  },
  {
    id: 'esquecidos',
    title: 'Objetos Esquecidos',
    icon: Search,
    content: "Solicitar devolução via WhatsApp; taxa R$150,00."
  },
  {
    id: 'automatico',
    title: 'Check-out Automático',
    icon: AlertTriangle,
    highlight: true,
    content: "Ultrapassando 12h, o sistema cobra automaticamente taxa de R$390,00."
  }
];