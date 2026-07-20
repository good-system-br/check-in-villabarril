export interface PasseioContato {
  nome: string;
  telefone: string;
  descricao: string;
  categoria: string;
  localizacao?: string;
}

export const PASSEIOS: PasseioContato[] = [
  {
    nome: 'Passeios de Quadriciclo',
    telefone: '(35) 99879-3419',
    descricao: 'O melhor e a Mão de Deus. Entre em contato e solicite as fotos.',
    categoria: 'Quadriciclo'
  },
  {
    nome: 'Passeios de Jeeps',
    telefone: '(35) 99110-3569',
    descricao: 'Contato para passeios de jeeps em Monte Verde.',
    categoria: 'Jipe'
  },
  {
    nome: 'Fazenda Pica-Pau — Visitação Guiada (Azeite)',
    telefone: '(11) 99909-9595',
    categoria: 'Fazenda e Tour Guiado',
    localizacao: 'Estrada Fazenda Velha, km 15 - Fazenda Velha, Camanducaia - MG, 37650-000',
    descricao: `Fazenda de azeite com visitação guiada. Pets bem-vindos.

Como agendar:
1. Entre em contato via WhatsApp informando: nome, quantas pessoas, tour desejado e datas alternativas.
2. A confirmação da visita ocorre somente após o pagamento de 50% do valor via PIX. O restante pode ser pago via Pix, dinheiro ou cartão após a visita.
3. Mapa e mais detalhes são enviados após a confirmação.`
  },
  {
    nome: 'Falcoaria Monte Verde',
    telefone: '(35) 98851-5333',
    categoria: 'Falcoaria',
    localizacao: 'Estrada Ponte Nova, km 7 - Ponte Nova, Camanducaia - MG, 37650-000',
    descricao: 'Experiência de falcoaria em Monte Verde. Entre em contato via WhatsApp para agendar.'
  },
  {
    nome: 'Ice Bar Monte Verde',
    telefone: '(35) 3438-2049',
    categoria: 'Ice Bar',
    localizacao: 'Av. Monte Verde - Centro, Camanducaia - MG, 37653-000',
    descricao: 'Bar de gelo temático no centro de Monte Verde. Entre em contato para agendar.'
  },
  {
    nome: 'Patinação no Gelo Monte Verde',
    telefone: '(35) 99855-7698',
    categoria: 'Patinação no Gelo',
    localizacao: 'Av. Monte Verde - Monte Verde, Camanducaia - MG, 37650-000',
    descricao: 'Pista de patinação no gelo em Monte Verde. Entre em contato para agendar.'
  },
  {
    nome: 'Fazenda Esperança',
    telefone: '(35) 98472-4184',
    categoria: 'Fazenda',
    localizacao: 'Estrada Rural Camanducaia a Sapucaí-Mirim, km 20 - Jaguary de Cima, Camanducaia - MG, 37650-000',
    descricao: `Hospitaleiro casarão antigo com natureza ao redor.

Opções de serviço:
- Buffet à vontade
- Mesas externas
- Cadeirinhas altas

Entre em contato via WhatsApp para agendar.`
  }
];
