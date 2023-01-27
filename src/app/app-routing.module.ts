import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BankListComponent } from './pages/bank-list/bank-list.component';
import { ResgisterClientComponent } from './pages/resgister-client/resgister-client.component';

const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'cadastrar', component: ResgisterClientComponent },
  {path: 'lista', component: BankListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
