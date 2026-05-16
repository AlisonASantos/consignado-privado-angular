import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Dashboard } from './pages/dashboard/dashboard';
import { Simulation } from './pages/simulation/simulation';
import { ProposalDetail } from './pages/proposal-detail/proposal-detail';
import { Proposals } from './pages/proposals/proposals';
import { Clients } from './pages/clients/clients';
import { Agreements } from './pages/agreements/agreements';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: Login },
  { path: 'dashboard', component: Dashboard },
  { path: 'simulation', component: Simulation },
  { path: 'proposal-detail', component: ProposalDetail },
  { path: 'proposals', component: Proposals },
  { path: 'clients', component: Clients },
  { path: 'agreements', component: Agreements },
];
