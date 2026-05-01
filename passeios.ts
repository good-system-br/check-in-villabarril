export interface PasseioContato {
  nome: string;
  telefone: string;
  descricao: string;
}

export const PASSEIOS: PasseioContato[] = [
  {
    nome: 'Passeios de Quadriciclo',
    telefone: '(35) 99879-3419',
    descricao: 'O melhor e a Mão de Deus. Entre em contato e solicite as fotos.'
  },
  {
    nome: 'Passeios de Jeeps',
    telefone: '(35) 99110-3569',
    descricao: 'Contato para passeios de jeeps em Monte Verde.'
  }
];