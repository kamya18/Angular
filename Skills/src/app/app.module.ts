import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductsFeatureModule } from './products-feature/products-feature.module';
import { ClassifyPipe } from './classify.pipe';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { ProfileService } from "./profile.service";
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component'

@NgModule({
  declarations: [
    AppComponent,
    ClassifyPipe,
    HomeComponent,
    ProductComponent,
    AdminComponent,
    LoginComponent
  ],
  imports: [ 
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    // ProductsFeatureModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
