import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AddressBookService {

  constructor(private http:HttpClient) { }


  addContact(contact: any) { 
    return this.http.post<any>("http://localhost:8080/addressBook/add", contact);
  }

}
