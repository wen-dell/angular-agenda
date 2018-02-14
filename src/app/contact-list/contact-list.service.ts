import { Injectable, EventEmitter } from '@angular/core';

import { Contact } from './../models/contact';
import { contacts } from './../contacts';

@Injectable()
export class ContactListService {

  contacts: Contact[] = [];
  static id: number;

  constructor() {
    this.contacts = contacts;
    ContactListService.id = this.contacts.length;
  }

  getContact(id: number) {
    for (let i = 0; i < this.contacts.length; i++) {
      if (this.contacts[i].id == id) {
        return this.contacts[i];
      }
    }
    return null;
  }
  
  getContacts() {
    return this.contacts;   
  }

  addCourse(contact: Contact) {
    contact.id = ++ContactListService.id;
    this.contacts.push(contact);
  }

  updateCourse(contact: Contact) {
    let position = this.contacts.indexOf(contact);
    this.contacts[position] = contact;
  }

  delete(contact: Contact) {
    let position = this.contacts.indexOf(contact);
    this.contacts.splice(position, 1);
  }

}
