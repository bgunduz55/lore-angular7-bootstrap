import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { HttpHeaders } from '@angular/common/http';
import { HttpMyService } from '../services/httpService.service';
import { Router } from '@angular/router';
import { GlobalTexts } from 'src/globals/globalTexts';

@Component({
  selector: 'abe-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  user: User = JSON.parse(localStorage.getItem("authUser"));
  users: User[];
  header = new HttpHeaders({});
  email: string; password: string; errorMsg: string;
  constructor(private httpService: HttpMyService, private router: Router) {
    this.header = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded',
    'Authorization': localStorage.getItem('token')  });
  }
  ngOnInit() {
    this.getAllUsers();
  }

  getAllUsers() {
    this.httpService.fetchData(GlobalTexts.rest_url + 'users', {headers: this.header}).subscribe(data => {
      this.users = data;
      console.log(this.users);
    }, err => {
      this.errorMsg = 'Error happened';
    });
  }
  logout() {
    localStorage.removeItem('authUser');
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
