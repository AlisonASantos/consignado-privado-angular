import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatChipsModule } from '@angular/material/chips';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { AppStateService } from '../../services/app-state.service';
import { Proposal, ProposalStatus } from '../../models/proposal.model';

@Component({
  selector: 'app-proposals',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule, MatToolbarModule, MatChipsModule, MatListModule, MatDialogModule],
  templateUrl: './proposals.html',
  styleUrl: './proposals.scss'
})
export class Proposals {
  selectedFilter: string = 'Todas';
  filters: string[] = ['Todas', 'Aprovada', 'Em Análise', 'Aguardando Formalização', 'Averbada', 'Paga', 'Rejeitada'];

  constructor(public state: AppStateService, private router: Router) {}

  get filteredProposals(): Proposal[] {
    if (this.selectedFilter === 'Todas') return this.state.proposals;
    return this.state.proposals.filter(p => p.status === this.selectedFilter);
  }

  selectFilter(filter: string): void {
    this.selectedFilter = filter;
  }

  getStatusColor(status: ProposalStatus): string {
    const colors: Record<string, string> = {
      'Aprovada': '#4CAF50', 'Em Análise': '#FF9800', 'Aguardando Formalização': '#2196F3',
      'Averbada': '#9C27B0', 'Paga': '#009688', 'Rejeitada': '#F44336'
    };
    return colors[status] || '#999';
  }

  formatCurrency(value: number): string {
    return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  }

  formatDate(date: Date): string {
    return new Date(date).toLocaleDateString('pt-BR');
  }

  viewDetail(): void {
    this.router.navigate(['/proposal-detail']);
  }

  goBack(): void {
    this.router.navigate(['/dashboard']);
  }
}
