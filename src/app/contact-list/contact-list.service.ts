import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ContactListService {

  constructor(private http: HttpClient) { }

  getContacts() {
    return this.http.get('assets/data/contacts.json');
  }

}
