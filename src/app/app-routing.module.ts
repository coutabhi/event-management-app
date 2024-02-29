import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { PasswordChangeComponent } from './pages/password-change/password-change.component';
import { HomeComponent } from './pages/home/home.component';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
import { EmployeeCreateComponent } from './employees/employee-create/employee-create.component';
import { EmployeeEditComponent } from './employees/employee-edit/employee-edit.component';
import { EmployeeDetailsComponent } from './employees/employee-details/employee-details.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent }, 
  { path: 'signup', component: SignupComponent}, 
  { path: 'password-change', component: PasswordChangeComponent}, 
  { path: 'home', component: HomeComponent}, 
  { path: 'employees', component: EmployeeListComponent }, 
  { path: 'employees/create', component: EmployeeCreateComponent }, 
  { path: 'employees/:id', component: EmployeeDetailsComponent }, 
  { path: 'employees/:id/edit', component: EmployeeEditComponent }, 
  { path: '', redirectTo: '/login', pathMatch: 'full' }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
