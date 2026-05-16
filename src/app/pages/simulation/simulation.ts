import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SimulationResult } from '../../models/proposal.model';

@Component({
  selector: 'app-simulation',
  standalone: true,
  imports: [CommonModule, FormsModule, MatCardModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatSliderModule, MatButtonModule, MatIconModule, MatProgressSpinnerModule, MatToolbarModule],
  templateUrl: './simulation.html',
  styleUrl: './simulation.scss'
})
export class Simulation {
  cpf = '';
  clientName = '';
  company = 'TechCorp Brasil LTDA';
  amount = 10000;
  installments = 24;
  calcMethod = 'PRICE';
  isSimulating = false;
  result: SimulationResult | null = null;

  companies = ['TechCorp Brasil LTDA', 'Banco Digital S.A.', 'Varejo Nacional LTDA', 'Indústria ABC S.A.'];

  constructor(private router: Router) {}

  simulate(): void {
    this.isSimulating = true;
    setTimeout(() => {
      const rate = 1.89 / 100;
      const n = this.installments;
      const pv = this.amount;
      const monthly = pv * (rate * Math.pow(1 + rate, n)) / (Math.pow(1 + rate, n) - 1);
      const total = monthly * n;
      const iof = pv * 0.0038 * n + pv * 0.01012;
      this.result = {
        amount: pv,
        installments: n,
        monthlyPayment: Math.round(monthly * 100) / 100,
        interestRate: 1.89,
        cet: 2.15,
        iof: Math.round(iof * 100) / 100,
        totalAmount: Math.round(total * 100) / 100,
      };
      this.isSimulating = false;
    }, 1500);
  }

  generateProposal(): void {
    this.router.navigate(['/proposal-detail'], { queryParams: { amount: this.result?.amount, installments: this.result?.installments } });
  }

  goBack(): void {
    this.router.navigate(['/dashboard']);
  }

  formatCurrency(value: number): string {
    return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  }
}
