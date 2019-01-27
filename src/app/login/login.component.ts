import { Component, OnInit } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { HttpMyService } from '../services/httpService.service';
import { GlobalTexts } from 'src/globals/globalTexts';
import { Router } from '@angular/router';

@Component({
  selector: 'abe-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  header = new HttpHeaders({});
  email: string; password: string; errorMsg: string; successMsg: string;
  constructor(private httpService: HttpMyService, private router: Router) {
    this.header = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
  }
  ngOnInit() {
  }

  login() {
    let body = new HttpParams()
    .set('email', this.email)
    .set('password', this.password)
    this.httpService.postData(GlobalTexts.rest_url + 'users/authenticate', body, {headers: this.header}).subscribe(data => {
      this.successMsg = "User logined succesfully!";
      localStorage.setItem('token', 'Bearer ' + data['token']);
      localStorage.setItem('authUser', JSON.stringify(data));
      this.router.navigate(['/']);
    }, err => {
      this.errorMsg = 'Error happened';
    });
  }

}
