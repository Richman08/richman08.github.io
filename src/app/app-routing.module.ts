import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { AuthorizationComponent } from './authorization/authorization.component';
import { AuthGuard } from './shared/guards/auth/auth.guard';

const routes: Routes = [
  {path: '', redirectTo:'main', pathMatch:'full'},
  {path: 'main', component: MainComponent, canActivate: [AuthGuard]},
  {path: 'login', component: AuthorizationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
