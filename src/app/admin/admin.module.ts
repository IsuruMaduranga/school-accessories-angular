import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AddProductFormComponent } from './components/add-product-form/add-product-form.component';
import { EditProductFormComponent } from './components/edit-product-form/edit-product-form.component';
import { AuthGuard } from '../auth.guard';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
    ]),
  ],
})
export class AdminModule { }
