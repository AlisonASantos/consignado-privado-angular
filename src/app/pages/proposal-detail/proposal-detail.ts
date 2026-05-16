import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatStepperModule } from '@angular/material/stepper';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatListModule } from '@angular/material/list';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'app-proposal-detail',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule, MatStepperModule, MatToolbarModule, MatProgressSpinnerModule, MatSnackBarModule, MatListModule, MatCheckboxModule],
  templateUrl: './proposal-detail.html',
  styleUrl: './proposal-detail.scss'
})
export class ProposalDetail {
  currentStep = 0;
  isProcessing = false;
  creditApproved = false;
  contractSigned = false;
  payrollRegistered = false;
  disbursed = false;

  steps = [
    { label: 'Proposta Criada', icon: 'description', completed: true },
    { label: 'Análise de Crédito', icon: 'analytics', completed: false },
    { label: 'Formalização Digital', icon: 'edit_document', completed: false },
    { label: 'Averbação', icon: 'check_circle', completed: false },
    { label: 'Liberação de Crédito', icon: 'payments', completed: false },
  ];

  formalizationChecks = [
    { label: 'Geração do contrato digital', checked: false },
    { label: 'Validação facial por biometria', checked: false },
    { label: 'Assinatura digital (ICP-Brasil)', checked: false },
    { label: 'Validação OCR de documentos', checked: false },
  ];

  constructor(private router: Router, private snackBar: MatSnackBar) {}

  processStep(step: number): void {
    this.isProcessing = true;
    const durations = [0, 2000, 1500, 1500, 2000];
    setTimeout(() => {
      this.isProcessing = false;
      this.steps[step].completed = true;
      switch (step) {
        case 1:
          this.creditApproved = true;
          this.snackBar.open('Crédito aprovado! Score: 785 | Risco: Baixo', 'OK', { duration: 3000 });
          break;
        case 2:
          this.contractSigned = true;
          this.formalizationChecks.forEach(c => c.checked = true);
          this.snackBar.open('Contrato assinado digitalmente com sucesso!', 'OK', { duration: 3000 });
          break;
        case 3:
          this.payrollRegistered = true;
          this.snackBar.open('Averbação registrada na folha de pagamento!', 'OK', { duration: 3000 });
          break;
        case 4:
          this.disbursed = true;
          this.snackBar.open('Crédito liberado via PIX com sucesso!', 'OK', { duration: 3000 });
          break;
      }
      if (step < 4) this.currentStep = step;
    }, durations[step]);
  }

  goBack(): void {
    this.router.navigate(['/dashboard']);
  }
}
