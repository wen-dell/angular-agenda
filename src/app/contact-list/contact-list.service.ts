import { Injectable } from '@angular/core';

import { Contact } from './../models/contact';
import { contacts } from './../contacts';

@Injectable()
export class ContactListService {

  contacts: Contact[] = [];

  constructor() {
    this.contacts = contacts;
  }
  
  getContacts() {
    return this.contacts;   
  }

  addCourse(contact: Contact) {
    this.contacts.push(contact);
  }

  delete(contact: Contact) {
    let posicao = this.contacts.indexOf(contact);
    this.contacts.splice(posicao, 1);
  }

}
