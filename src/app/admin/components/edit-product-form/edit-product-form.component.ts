import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/shared/models/category';
import { CategoryService } from 'src/app/shared/services/category.service';
import { ProductDataService } from 'src/app/shared/services/product-data.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-product-form',
  templateUrl: './edit-product-form.component.html',
  styleUrls: ['./edit-product-form.component.css'],
})
export class EditProductFormComponent implements OnInit {
  categories: any;
  product: any;
  id: any;
  buttonType: string;
  fileToUpload: any;

  imageUrl: string = '/assets/imgs/noimage.png';
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private categoryService: CategoryService,
    private productDataService: ProductDataService
  ) {}

  ngOnInit(): void {
    this.categoryService.getAll().subscribe((categories) => {
      this.categories = categories;
    });
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id)
      this.productDataService.get(this.id).subscribe((p) => (this.product = p));
  }

  handleFileInput(event: Event) {
    const element = event.currentTarget as HTMLInputElement;
    let fileList: FileList | null = element.files;
    if (fileList) {
      this.fileToUpload = fileList.item(0);
      console.log('file' + this.fileToUpload);
    }
    var reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
      console.log('imageUrl' + this.imageUrl);
    };
    reader.readAsDataURL(this.fileToUpload);
  }

  async onClick(buttonType: string) {
    if (buttonType === 'save') {
      if (this.imageUrl != '/assets/imgs/noimage.png') {
        this.product.image = '/assets/imgs/' + this.fileToUpload?.name;
      }
      Swal.fire({
        title: 'Are you sure you want to edit the product?',
        showCancelButton: true,
        confirmButtonText: 'Yes',
        cancelButtonText: 'Cancel',
      }).then((result) => {
        if (result.value) {
          console.log(this.product);
          this.productDataService.update(this.product).subscribe((response) => {
            this.router.navigate(['products']);
            Swal.fire({
              icon: 'success',
              title: 'Product Details Updated Successfully!',
              showConfirmButton: false,
              timer: 1500,
            });
          });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
        }
      });
    }
    if (buttonType === 'cancel') {
      this.router.navigate(['products']);
    }
    if (buttonType === 'add-product-category') {
      const { value: newCategory } = await Swal.fire({
        title: 'New product category',
        input: 'text',
        inputAttributes: {
          autocapitalize: 'off',
        },
        showCancelButton: true,
        confirmButtonText: 'Add',
        showLoaderOnConfirm: true,
        allowOutsideClick: () => !Swal.isLoading(),
      });
      if (newCategory) {
        var category: Category = {
          category_id: 0,
          name: newCategory,
        };
        this.categoryService.addCategory(category).subscribe((responce) => {
          this.categoryService.getAll().subscribe((categories) => {
            this.categories = categories;
            Swal.fire(
              `New product category ${newCategory} is added`,
              '',
              'success'
            );
          });
        });
      }
    }
  }
}
