import { Component, OnInit } from '@angular/core';


import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Contact } from '../models/contact';
import { ContactListService } from '../contact-list/contact-list.service';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  form: FormGroup;
  subscription: Subscription;
  contact: Contact;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private contactListService: ContactListService
  ) {
      this.contact = new Contact();
  }


  ngOnInit() {
    this.form = this.formBuilder.group({
      name: [null, [Validators.required]],
      email: [null],
      telephone: [null, Validators.required]
    });

    if (this.router.url.includes("edit")) {
      this.subscription = this.route.params.subscribe(
        (params: any) => {
          let id: number = params['id'];
          this.contact = this.contactListService.getContact(id);
  
          this.form.setValue({
            name: this.contact.name,
            email: this.contact.email,
            telephone: this.contact.telephone
          });
        }
      );

    }

  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  get name() {
    return this.form.get('name');
  }

  get email() {
    return this.form.get('email');
  }

  get telephone() {
    return this.form.get('telephone');
  }

  submitForm() {
    let contact = new Contact();
    contact.name = this.name.value;
    contact.email = this.email.value;
    contact.telephone = this.telephone.value;

    if (this.router.url.includes("edit")) {
      this.contact.name = contact.name;
      this.contact.email = contact.email;
      this.contact.telephone = contact.telephone;

      this.contactListService.updateCourse(this.contact);
    } else {
      this.contactListService.addCourse(contact);
    }

    this.router.navigate(['/contacts']);
    this.form.reset();
  }

}
