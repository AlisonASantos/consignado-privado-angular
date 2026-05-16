export interface Proposal {
  id: string;
  clientName: string;
  cpf: string;
  company: string;
  amount: number;
  installments: number;
  monthlyPayment: number;
  interestRate: number;
  cet: number;
  status: ProposalStatus;
  createdAt: Date;
}

export type ProposalStatus =
  | 'Aprovada'
  | 'Em Análise'
  | 'Aguardando Formalização'
  | 'Averbada'
  | 'Paga'
  | 'Rejeitada';

export interface SimulationResult {
  amount: number;
  installments: number;
  monthlyPayment: number;
  interestRate: number;
  cet: number;
  iof: number;
  totalAmount: number;
}

export interface Client {
  name: string;
  cpf: string;
  company: string;
  email: string;
  phone: string;
  availableMargin: number;
  proposalCount: number;
  status: 'Ativo' | 'Bloqueado';
}

export interface Agreement {
  company: string;
  cnpj: string;
  employeeCount: number;
  maxRate: number;
  maxInstallments: number;
  marginPolicy: string;
  status: 'Ativo' | 'Pendente';
  totalContracts: number;
  totalVolume: number;
}
