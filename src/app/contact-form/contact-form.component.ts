import { Component, OnInit } from '@angular/core';


import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Contact } from '../models/contact';
import { ContactListService } from '../contact-list/contact-list.service';


@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private contactListService: ContactListService) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: [null, Validators.required],
      email: [null],
      telephone: [null, Validators.required]
    });
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
