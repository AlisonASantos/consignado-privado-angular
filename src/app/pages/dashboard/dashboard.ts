import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatBadgeModule } from '@angular/material/badge';
import { MatChipsModule } from '@angular/material/chips';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatSidenavModule, MatListModule, MatIconModule, MatButtonModule, MatCardModule, MatBadgeModule, MatChipsModule, MatProgressBarModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class Dashboard {
  selectedIndex = 0;

  navItems = [
    { icon: 'dashboard', label: 'Dashboard', route: '/dashboard' },
    { icon: 'calculate', label: 'Simulação', route: '/simulation' },
    { icon: 'description', label: 'Propostas', route: '/proposals' },
    { icon: 'people', label: 'Clientes', route: '/clients' },
    { icon: 'handshake', label: 'Convênios', route: '/agreements' },
  ];

  kpis = [
    { icon: 'description', label: 'Propostas Ativas', value: '247', trend: '+12%', trendUp: true, color: '#1A237E' },
    { icon: 'payments', label: 'Volume Contratado', value: 'R$ 3.2M', trend: '+8%', trendUp: true, color: '#2E7D32' },
    { icon: 'check_circle', label: 'Taxa de Aprovação', value: '87.3%', trend: '+3%', trendUp: true, color: '#1565C0' },
    { icon: 'warning', label: 'Inadimplência', value: '2.1%', trend: '-0.5%', trendUp: false, color: '#C62828' },
  ];

  recentProposals = [
    { name: 'Maria Silva', amount: 'R$ 15.000', status: 'Aprovada', statusColor: '#4CAF50' },
    { name: 'João Oliveira', amount: 'R$ 8.000', status: 'Em Análise', statusColor: '#FF9800' },
    { name: 'Ana Lima', amount: 'R$ 25.000', status: 'Formalização', statusColor: '#2196F3' },
    { name: 'Carlos Souza', amount: 'R$ 12.000', status: 'Paga', statusColor: '#009688' },
  ];

  statusDistribution = [
    { label: 'Aprovadas', value: 87, max: 100, color: '#4CAF50' },
    { label: 'Em Análise', value: 42, max: 100, color: '#FF9800' },
    { label: 'Formalização', value: 35, max: 100, color: '#2196F3' },
    { label: 'Averbadas', value: 28, max: 100, color: '#9C27B0' },
    { label: 'Pagas', value: 45, max: 100, color: '#009688' },
    { label: 'Rejeitadas', value: 10, max: 100, color: '#F44336' },
  ];

  flowSteps = [
    { icon: 'grid_view', label: 'Simulação', color: '#1A237E' },
    { icon: 'description', label: 'Proposta', color: '#283593' },
    { icon: 'analytics', label: 'Análise de Crédito', color: '#303F9F' },
    { icon: 'play_arrow', label: 'Formalização', color: '#3949AB' },
    { icon: 'check_circle', label: 'Averbação', color: '#3F51B5' },
    { icon: 'videocam', label: 'Liberação', color: '#5C6BC0' },
    { icon: 'receipt', label: 'Cobrança', color: '#7986CB' },
    { icon: 'verified', label: 'Liquidação', color: '#9FA8DA' },
  ];

  constructor(private router: Router) {}

  navigateTo(route: string, index: number): void {
    this.selectedIndex = index;
    if (index !== 0) {
      this.router.navigate([route]);
    }
  }
}
