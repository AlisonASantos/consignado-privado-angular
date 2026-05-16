import { Injectable } from '@angular/core';
import { Proposal, Client, Agreement } from '../models/proposal.model';

@Injectable({ providedIn: 'root' })
export class AppStateService {
  proposals: Proposal[] = [
    { id: 'PROP-2024-001', clientName: 'Maria Silva', cpf: '123.456.789-00', company: 'TechCorp Brasil LTDA', amount: 15000, installments: 24, monthlyPayment: 782.15, interestRate: 1.89, cet: 2.15, status: 'Aprovada', createdAt: new Date(2024, 0, 15) },
    { id: 'PROP-2024-002', clientName: 'João Oliveira', cpf: '987.654.321-00', company: 'Banco Digital S.A.', amount: 8000, installments: 12, monthlyPayment: 745.30, interestRate: 1.75, cet: 2.01, status: 'Em Análise', createdAt: new Date(2024, 0, 20) },
    { id: 'PROP-2024-003', clientName: 'Ana Lima', cpf: '456.789.123-00', company: 'Varejo Nacional LTDA', amount: 25000, installments: 36, monthlyPayment: 892.45, interestRate: 1.95, cet: 2.22, status: 'Aguardando Formalização', createdAt: new Date(2024, 1, 1) },
    { id: 'PROP-2024-004', clientName: 'Carlos Souza', cpf: '321.654.987-00', company: 'TechCorp Brasil LTDA', amount: 12000, installments: 18, monthlyPayment: 756.80, interestRate: 1.82, cet: 2.08, status: 'Paga', createdAt: new Date(2024, 1, 10) },
    { id: 'PROP-2024-005', clientName: 'Fernanda Costa', cpf: '654.321.987-00', company: 'Indústria ABC S.A.', amount: 30000, installments: 48, monthlyPayment: 845.60, interestRate: 2.10, cet: 2.38, status: 'Rejeitada', createdAt: new Date(2024, 1, 15) },
    { id: 'PROP-2024-006', clientName: 'Roberto Santos', cpf: '789.123.456-00', company: 'Banco Digital S.A.', amount: 20000, installments: 30, monthlyPayment: 856.90, interestRate: 1.92, cet: 2.18, status: 'Averbada', createdAt: new Date(2024, 2, 1) },
    { id: 'PROP-2024-007', clientName: 'Patrícia Almeida', cpf: '147.258.369-00', company: 'Varejo Nacional LTDA', amount: 10000, installments: 12, monthlyPayment: 932.10, interestRate: 1.78, cet: 2.05, status: 'Aprovada', createdAt: new Date(2024, 2, 5) },
  ];

  clients: Client[] = [
    { name: 'Maria Silva', cpf: '123.456.789-00', company: 'TechCorp Brasil LTDA', email: 'maria@email.com', phone: '(11) 99999-1234', availableMargin: 1200, proposalCount: 2, status: 'Ativo' },
    { name: 'João Oliveira', cpf: '987.654.321-00', company: 'Banco Digital S.A.', email: 'joao@email.com', phone: '(21) 98888-5678', availableMargin: 800, proposalCount: 1, status: 'Ativo' },
    { name: 'Ana Lima', cpf: '456.789.123-00', company: 'Varejo Nacional LTDA', email: 'ana@email.com', phone: '(31) 97777-9012', availableMargin: 1500, proposalCount: 1, status: 'Ativo' },
    { name: 'Carlos Souza', cpf: '321.654.987-00', company: 'TechCorp Brasil LTDA', email: 'carlos@email.com', phone: '(41) 96666-3456', availableMargin: 950, proposalCount: 3, status: 'Ativo' },
    { name: 'Fernanda Costa', cpf: '654.321.987-00', company: 'Indústria ABC S.A.', email: 'fernanda@email.com', phone: '(51) 95555-7890', availableMargin: 0, proposalCount: 1, status: 'Bloqueado' },
    { name: 'Roberto Santos', cpf: '789.123.456-00', company: 'Banco Digital S.A.', email: 'roberto@email.com', phone: '(61) 94444-1234', availableMargin: 2000, proposalCount: 2, status: 'Ativo' },
    { name: 'Patrícia Almeida', cpf: '147.258.369-00', company: 'Varejo Nacional LTDA', email: 'patricia@email.com', phone: '(71) 93333-5678', availableMargin: 1100, proposalCount: 1, status: 'Ativo' },
    { name: 'Lucas Ferreira', cpf: '258.369.147-00', company: 'Indústria ABC S.A.', email: 'lucas@email.com', phone: '(81) 92222-9012', availableMargin: 600, proposalCount: 0, status: 'Ativo' },
  ];

  agreements: Agreement[] = [
    { company: 'TechCorp Brasil LTDA', cnpj: '12.345.678/0001-90', employeeCount: 2500, maxRate: 2.5, maxInstallments: 84, marginPolicy: '30% do salário líquido', status: 'Ativo', totalContracts: 187, totalVolume: 4500000 },
    { company: 'Banco Digital S.A.', cnpj: '98.765.432/0001-10', employeeCount: 1200, maxRate: 2.8, maxInstallments: 72, marginPolicy: '35% do salário líquido', status: 'Ativo', totalContracts: 95, totalVolume: 2100000 },
    { company: 'Varejo Nacional LTDA', cnpj: '45.678.901/0001-23', employeeCount: 5000, maxRate: 2.2, maxInstallments: 60, marginPolicy: '25% do salário líquido', status: 'Ativo', totalContracts: 312, totalVolume: 7800000 },
    { company: 'Indústria ABC S.A.', cnpj: '67.890.123/0001-45', employeeCount: 800, maxRate: 3.0, maxInstallments: 48, marginPolicy: '30% do salário líquido', status: 'Pendente', totalContracts: 42, totalVolume: 890000 },
  ];

  addProposal(proposal: Proposal): void {
    this.proposals.unshift(proposal);
  }
}
