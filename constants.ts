import {
  CreditCard,
  Clock,
  Coffee,
  Sparkles,
  Wifi,
  ShieldAlert,
  Dog,
  Search,
  Phone,
  MapPin,
  HandHeart,
  Wine
} from 'lucide-react';
import { InfoSection, ContactInfo } from './types';

export const APP_INFO = {
  name: "POUSADA VILLA BARRIL",
  subtitle: "GUIA DO HÓSPEDE"
};

export const CONTACT_INFO: ContactInfo = {
  phone: "55 359977-00123",
  whatsappRaw: "555535997700123",
  address: "Villas de Monte Verde III - Rua Três, Monte Verde, Camanducaia - MG, 37653-000, Brasil",
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3674.488794!2d-46.080791!3d-22.854601!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjLCsDUxJzE2LjYiUyA0NsKwMDQnNDMuMCJX!5e0!3m2!1spt-BR!2sbr!4v1698765432100!5m2!1spt-BR!2sbr"
};

export const SECTIONS: InfoSection[] = [
  {
    id: 'estorno',
    title: 'Política de Cancelamento e Estorno',
    icon: CreditCard,
    image: '/assets/politica-cancelamento.jpg',
    content: `Direito de Arrependimento: Reembolso integral para cancelamentos solicitados em até 07 dias corridos após a confirmação da reserva (Art. 49 do CDC).

Após o Prazo Legal: Passados os 07 dias da compra, não haverá reembolso ou estorno de valores pagos, independentemente da data do check-in.

No-Show (Não comparecimento): O não comparecimento na data reservada sem aviso prévio resultará na retenção de 100% do valor pago.

Prazo de Estorno: Para casos dentro do direito de arrependimento, o estorno será processado em até 7 dias.`
  },
  {
    id: 'frigobar',
    title: 'Frigobar',
    icon: Wine,
    image: '/assets/frigobar.jpg',
    content: "Refrigerante: R$10,00\nCerveja: R$15,00\nÁgua: R$6,00\nChandon baby: R$85,00\nVinho Branco Chua: R$180,00\nVinho: R$120,00\nSalton: R$130,00\nBatatas: R$20,00",
  },
  {
    id: 'massagem',
    title: 'Massagem',
    icon: HandHeart,
    image: '/assets/massagem.jpg',
    content: "Reserve uma sessão relaxante de massagem durante sua estadia.",
    externalLink: "https://massagem-vb.vercel.app/",
    buttonText: "Ver Opções de Massagem"
  },
  {
    id: 'checkin',
    title: 'Check-in e Check-out',
    icon: Clock,
    image: '/assets/checkin-checkout.jpg',
    content: `Check-in: A partir das 15:00 (apresentar documentos).\nCheck-out: Até 12:00.\nLate-checkout: consultar disponibilidade e valores.\nRecepção: 8:00 às 23:00.`
  },
  {
    id: 'cafe',
    title: 'Café da Manhã',
    icon: Coffee,
    image: '/assets/cafe-da-manha.jpg',
    isUrgent: true,
    deadline: "Pedido até 20:00",
    content: "Horário: 8:00 às 10:00\n\nServido no quarto com hora marcada. O pedido pode ser feito assim que receber a chave do quarto. Solicitar via recepção ou mensagem.",
    externalLink: "https://cafevillabarril.vercel.app/",
    buttonText: "Solicitar Café da Manhã"
  },
  {
    id: 'arrumacao',
    title: 'Arrumação do Quarto',
    icon: Sparkles,
    image: '/assets/arrumacao.jpg',
    isUrgent: true,
    deadline: "Solicitar até 14:00",
    content: "Solicitar antes das 14:00.",
    whatsappPhone: CONTACT_INFO.whatsappRaw,
    whatsappText: "Olá! Gostaria de solicitar a arrumação do meu quarto.",
    whatsappButtonText: "Solicitar Arrumação via WhatsApp"
  },
  {
    id: 'wifi',
    title: 'Wi-Fi',
    icon: Wifi,
    image: '/assets/wifi.jpg',
    content: "Rede: Villa Barril\nSenha: cadubela",
    copyableText: "cadubela",
    copyLabel: "Copiar Senha"
  },
  {
    id: 'regras',
    title: 'Regras e Políticas',
    icon: ShieldAlert,
    image: '/assets/regras-politicas.jpg',
    content: `Proibido uso de DRONE.
Proibido fumar dentro da acomodação; caso seja identificado cheiro, será cobrada 1 diária extra.
Pets: sempre acompanhar; diária R$150,00.

Regras de Convivência:
Silêncio após 22h e antes de 08h.
Proibido som alto nas áreas comuns.
Acesso apenas a hóspedes registrados.

Danos e Avarias:
Cuidados com a Acomodação: danos serão cobrados no check-out.

Aviso de Segurança:
Para sua segurança e conservação de nossas acomodações, é estritamente proibido o uso de:
• Ferro de passar roupas
• Qualquer outro equipamento elétrico gerador de calor

Nota: É permitido apenas o uso de aparelhos fornecidos pela própria pousada. Contamos com a sua colaboração!`
  },
  {
    id: 'pet',
    title: 'Pet Friendly',
    icon: Dog,
    image: '/assets/pet.jpg',
    content: "Seu pet é bem-vindo! Lembre-se de mantê-lo sempre acompanhado. Taxa de diária: R$150,00."
  },
  {
    id: 'esquecidos',
    title: 'Objetos Esquecidos',
    icon: Search,
    image: '/assets/objeto-esquecido.jpg',
    content: `Antes de ir embora, dê uma última conferida! 🔍

A Pousada Villa Barril não se responsabiliza por itens e pertences esquecidos nas acomodações.

Por razões logísticas da região — Monte Verde não dispõe de agência dos Correios —, não realizamos a postagem ou despacho de objetos deixados no local.

Verifique suas malas e faça uma excelente viagem de volta! 🌲✨

Com carinho, Equipe Villa Barril.`
  }
];