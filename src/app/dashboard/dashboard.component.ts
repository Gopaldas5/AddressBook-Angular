import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{AddressBookService} from '../address-book.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  personContacts: any = [];

  constructor(private router:Router, private service:AddressBookService) { }

  ngOnInit(): void {
  }

  btnClick= () =>{
    this.router.navigateByUrl('/form')
  }

}
