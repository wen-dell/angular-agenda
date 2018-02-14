import { Component, OnInit } from '@angular/core';


import { ContactListService } from './contact-list.service';
import { Contact } from './../models/contact';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  filtro: string;
  contacts: Contact[];

  constructor(private contactListService: ContactListService) { }

  ngOnInit() {
    this.contactListService.getContacts()
    .subscribe((contacts: Contact[]) => this.contacts = contacts);
  }

}
