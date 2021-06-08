import { Category } from './../../../shared/models/category';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Product } from 'src/app/shared/models/product';
import { CategoryService } from 'src/app/shared/services/category.service';
import { ProductDataService } from 'src/app/shared/services/product-data.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-product-form',
  templateUrl: './add-product-form.component.html',
  styleUrls: ['./add-product-form.component.css'],
})
export class AddProductFormComponent implements OnInit {
  categories: any;
  product: Product = {
    product_id: 0,
    title: '',
    price: 0,
    category: '',
    image: '',
    descript: '',
  };
  fileToUpload: any;
  buttonType: string;

  imageUrl: string = '/assets/imgs/noimage.png';
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private categoryService: CategoryService,
    private productDataService: ProductDataService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.categoryService.getAll().subscribe((categories) => {
      this.categories = categories;
    });
  }

  async onClick(buttonType: string) {
    if (buttonType === 'add-product') {
      console.log(this.product);
      this.product.image = '/assets/imgs/' + this.fileToUpload?.name;
      Swal.fire({
        title: 'Are you sure you want to add the product?',
        showCancelButton: true,
        confirmButtonText: 'Yes',
        cancelButtonText: 'Cancel',
      }).then((result) => {
        if (result.value) {
          this.productDataService
            .addProduct(this.product)
            .subscribe((response) => {
              this.router.navigate(['products']);
              Swal.fire({
                icon: 'success',
                title: 'New Product has been saved',
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
    };
    reader.readAsDataURL(this.fileToUpload);
  }
}
