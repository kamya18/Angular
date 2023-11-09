import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { AuthGuard } from './auth.guard';
import { GAuthGuard } from './g-auth.guard';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '',component: HomeComponent, pathMatch:'full'},
  {path: 'home',component: HomeComponent},
  {path: 'admin',component: AdminComponent, canActivate:[GAuthGuard]},
  {path: 'login',component: LoginComponent},
  { path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) },

  // {path: 'product/:id', component: ProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
