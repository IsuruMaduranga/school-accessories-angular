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

  addProduct(product: any) {
    console.log(product);
    this.product.title = product.title;
    this.product.price = product.price;
    this.product.category = product.category;
    this.product.descript = product.description;
    this.product.image = '/assets/imgs/' + this.fileToUpload?.name;
    console.log('-------------' + this.product.image);
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
          });
        Swal.fire('Product Added Successfully!', 'success');
      } else if (result.dismiss === Swal.DismissReason.cancel) {
      }
    });
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

  navigatebackToProducts() {
    this.router.navigate(['products']);
  }

  addCategory() {
    this.router.navigate(['products']);
    // Swal.fire({
    //   title: 'Submit your Github username',
    //   input: 'text',
    //   inputAttributes: {
    //     autocapitalize: 'off',
    //   },
    //   showCancelButton: true,
    //   confirmButtonText: 'Look up',
    //   showLoaderOnConfirm: true,
    //   preConfirm: (login) => {},
    //   allowOutsideClick: () => !Swal.isLoading(),
    // }).then((result) => {
    //   if (result.isConfirmed) {
    //     Swal.fire({});
    //   }
    // });
  }
}
