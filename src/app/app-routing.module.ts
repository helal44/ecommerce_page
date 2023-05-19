import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DetailsComponent } from './details/details.component';
import { ProductComponent } from './product/product.component';
import { routesguardGuard } from './auth/routesguard.guard';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  {
     path:'',
     component:ProductComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'detail/:id',
    component:DetailsComponent
  },
  {
    path:'cart',
    component:CartComponent
  },
  {
    path:'**',
    component:ProductComponent,
    canActivate:[routesguardGuard]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
