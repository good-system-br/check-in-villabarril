export interface Restaurante {
  nome: string;
  categoria: string;
  especialidade: string;
  telefone: string;
  localizacao: string;
}

export const RESTAURANTES: Restaurante[] = [
  {
    nome: 'Villa Donna Bistrô',
    categoria: 'Massas',
    especialidade: 'Massas artesanais e pratos italianos',
    telefone: '(35) 3438-1881',
    localizacao: 'Monte Verde, Camanducaia - MG'
  },
  {
    nome: 'Portale Di Napoli',
    categoria: 'Massas',
    especialidade: 'Culinária italiana com foco em massas',
    telefone: '(35) 3438-1956',
    localizacao: 'Monte Verde, Camanducaia - MG'
  },
  {
    nome: 'Bergamo',
    categoria: 'Massas',
    especialidade: 'Massas e receitas inspiradas na Itália',
    telefone: '(35) 9719-5986',
    localizacao: 'Monte Verde, Camanducaia - MG'
  },
  {
    nome: "L'Archange Bistrot",
    categoria: 'Fondue',
    especialidade: 'Fondue e experiência para reserva',
    telefone: '(35) 3438-2390',
    localizacao: 'Monte Verde, Camanducaia - MG'
  },
  {
    nome: 'Hügel',
    categoria: 'Alemã',
    especialidade: 'Culinária alemã e pratos típicos',
    telefone: '(11) 91789-9449',
    localizacao: 'Monte Verde, Camanducaia - MG'
  },
  {
    nome: 'Rasselbook',
    categoria: 'Alemã',
    especialidade: 'Sabores germânicos e cozinha tradicional',
    telefone: '(11) 98928-4020',
    localizacao: 'Monte Verde, Camanducaia - MG'
  },
  {
    nome: 'Sierra 360 Restaurante Giratório',
    categoria: 'Outros',
    especialidade: 'Experiência giratória com reserva',
    telefone: '(35) 3438-2493',
    localizacao: 'Monte Verde, Camanducaia - MG'
  },
  {
    nome: 'Rancho Da Picanha',
    categoria: 'Outros',
    especialidade: 'Carnes, grelhados e pratos para compartilhar',
    telefone: '(35) 3438-1943',
    localizacao: 'Monte Verde, Camanducaia - MG'
  },
  {
    nome: 'Restaurante Pucci',
    categoria: 'Outros',
    especialidade: 'Menu variado para almoço e jantar',
    telefone: '(35) 99736-4101',
    localizacao: 'Monte Verde, Camanducaia - MG'
  },
  {
    nome: 'Boteco do Lago',
    categoria: 'Outros',
    especialidade: 'Petiscos, bebidas e ambiente descontraído',
    telefone: '',
    localizacao: 'Monte Verde, Camanducaia - MG'
  },
  {
    nome: 'O Trutário',
    categoria: 'Outros',
    especialidade: 'Peixes e pratos da casa',
    telefone: '(35) 99724-6119',
    localizacao: 'Monte Verde, Camanducaia - MG'
  },
  {
    nome: 'La Bella Vista Bistrot',
    categoria: 'Outros',
    especialidade: 'Vista panorâmica e pratos da casa',
    telefone: '(35) 99141-1913',
    localizacao: 'Monte Verde, Camanducaia - MG'
  }
];