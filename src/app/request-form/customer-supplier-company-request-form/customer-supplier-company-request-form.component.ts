import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-customer-supplier-company-request-form',
  templateUrl: './customer-supplier-company-request-form.component.html',
  styleUrls: ['./customer-supplier-company-request-form.component.css']
})
export class CustomerSupplierCompanyRequestFormComponent implements OnInit {
  public title;
  public slug = '';
  public allAttachmentCounter = 1;
  public allAttachments: any[] = [];

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(
      (params) => {
        this.slug = params['slug'];
        if (this.slug === 'supplier') {
          this.title = 'Supplier (Company)';
        }
        if (this.slug === 'customer-company') {
          this.title = 'Customer (Company)'
        }
        if (this.slug === 'customer-person') {
          this.title = 'Customer (Person)'
        }
      }
    )
  }

  addAttachment() {
    this.allAttachmentCounter++;
    this.allAttachments.push(this.allAttachmentCounter);
  }

  createRange(number) {
    let items: number[] = [];
    for (let i = 1; i <= number; i++) {
      items.push(i);
    }
    return items;
  }

  submitRequestForm() {

  }

  removeAttachment(index) {
    this.allAttachmentCounter--;
    this.allAttachments.splice(index, 1);
  }
}
