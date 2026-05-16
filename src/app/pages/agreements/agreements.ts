import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatChipsModule } from '@angular/material/chips';
import { MatListModule } from '@angular/material/list';
import { AppStateService } from '../../services/app-state.service';
import { Agreement } from '../../models/proposal.model';

@Component({
  selector: 'app-agreements',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule, MatToolbarModule, MatChipsModule, MatListModule],
  templateUrl: './agreements.html',
  styleUrl: './agreements.scss'
})
export class Agreements {
  selectedAgreement: Agreement | null = null;

  constructor(public state: AppStateService, private router: Router) {}

  selectAgreement(a: Agreement): void {
    this.selectedAgreement = a;
  }

  closeDetail(): void {
    this.selectedAgreement = null;
  }

  formatCurrency(value: number): string {
    return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  }

  goBack(): void {
    this.router.navigate(['/dashboard']);
  }
}
