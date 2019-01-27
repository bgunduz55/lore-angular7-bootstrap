import { Component, OnInit } from '@angular/core';
import { RequestOptions, Headers } from '@angular/http';
import { HttpMyService } from '../services/httpService.service';
import { GlobalTexts } from 'src/globals/globalTexts';
import { HttpHeaders, HttpParams } from '@angular/common/http';

@Component({
  selector: 'abe-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  header = new HttpHeaders({});
  email: string; password: string; fName: string; lName: string; errorMsg: string; successMsg: string;
  constructor(private httpService: HttpMyService) {
    this.header = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
  }
  ngOnInit() {
    
  }

  submit() {
    let body = new HttpParams()
    .set('email', this.email)
    .set('password', this.password)
    .set('firstName', this.fName)
    .set('lastName', this.lName);
    this.httpService.postData(GlobalTexts.rest_url + 'users/register', body, {headers: this.header}).subscribe(data => {
      this.successMsg = "User created succesfully!";
    }, err => {
      this.errorMsg = 'Error happened';
    });
  }

}
