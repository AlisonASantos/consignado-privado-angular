import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { MatChipsModule } from '@angular/material/chips';
import { AppStateService } from '../../services/app-state.service';
import { Client } from '../../models/proposal.model';

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [CommonModule, FormsModule, MatCardModule, MatButtonModule, MatIconModule, MatToolbarModule, MatFormFieldModule, MatInputModule, MatListModule, MatDialogModule, MatChipsModule],
  templateUrl: './clients.html',
  styleUrl: './clients.scss'
})
export class Clients {
  searchQuery = '';
  selectedClient: Client | null = null;
  showNewClientForm = false;
  newClient = { name: '', cpf: '', email: '', phone: '', company: 'TechCorp Brasil LTDA', lgpd: false };

  constructor(public state: AppStateService, private router: Router) {}

  get filteredClients(): Client[] {
    if (!this.searchQuery) return this.state.clients;
    const q = this.searchQuery.toLowerCase();
    return this.state.clients.filter(c => c.name.toLowerCase().includes(q) || c.cpf.includes(q));
  }

  selectClient(client: Client): void {
    this.selectedClient = client;
  }

  closeDetail(): void {
    this.selectedClient = null;
  }

  formatCurrency(value: number): string {
    return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  }

  goBack(): void {
    this.router.navigate(['/dashboard']);
  }
}
