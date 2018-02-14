import { Component, OnInit } from '@angular/core';


import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Contact } from '../models/contact';
import { ContactListService } from '../contact-list/contact-list.service';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  form: FormGroup;
  contact: Contact;
  subscription: Subscription;

  constructor(private formBuilder: FormBuilder, private contactListService: ContactListService) {
    
   }

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: [null, Validators.required],
      email: [null],
      telephone: [null, Validators.required]
    });

    this.subscription = this.contactListService.contactEmitter.subscribe(
      contact =>{
        this.contact = contact;

        this.form.setValue({
          name: this.contact.name,
          email: this.contact.email,
          telephone: this.contact.telephone
        });
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
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

    this.contactListService.addCourse(contact);
    this.form.reset();
  }

}
