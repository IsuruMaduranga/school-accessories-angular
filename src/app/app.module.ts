import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoppingModule } from './shopping/shopping.module';
import { ProductsComponent } from './shopping/products/products.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from './core/core.module';
import { LoginComponent } from './core/components/login/login.component';
import { EditProductFormComponent } from './admin/components/edit-product-form/edit-product-form.component';
import { AddProductFormComponent } from './admin/components/add-product-form/add-product-form.component';
import {CustomerModule} from "./customer/customer.module";

@NgModule({
  declarations: [
    AppComponent,
    EditProductFormComponent,
    AddProductFormComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ShoppingModule,
    CustomerModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: LoginComponent },
      { path: 'products', component: ProductsComponent },
    ]),
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
