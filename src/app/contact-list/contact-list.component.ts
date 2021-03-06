import { Component, OnInit } from '@angular/core';


import { ContactListService } from './contact-list.service';
import { Contact } from './../models/contact';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  filter: string;
  contacts: Contact[];

  constructor(private contactListService: ContactListService, private router: Router) { }

  ngOnInit() {
    this.contacts = this.contactListService.getContacts();
  }

  search() {
    if (this.filter) {
      return this.contacts.filter(contact => {
        return contact.name.includes(this.filter);
      });
    } else {
      return this.contacts;
    }
  }

  delete(contact: Contact) {
    let option = confirm(`Do you really want to delete the contact ${contact.name}?`);

    if (option) {
      this.contactListService.delete(contact);
    }
  }

  updateContact(contact: Contact) {
    this.router.navigate(['contact', contact.id, 'edit']);
  }

}
