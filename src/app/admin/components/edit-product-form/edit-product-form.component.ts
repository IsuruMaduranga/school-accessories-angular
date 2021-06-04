import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    }
    var reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    };
    reader.readAsDataURL(this.fileToUpload);
  }

  save() {
    if (this.imageUrl != '/assets/imgs/noimage.png') {
      this.product.imageUrl = this.imageUrl;
    }
    Swal.fire({
      title: 'Are you sure you want to edit the product?',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'Cancel',
    }).then((result) => {
      if (result.value) {
        this.productDataService
          .update(this.product)
          .subscribe((response) => this.router.navigate(['products']));
        Swal.fire('Product Details Updated Successfully!', 'success');
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'The Product Details Update was Cancelled',
          'error'
        );
        this.router.navigate(['products']);
      }
    });
  }
}
