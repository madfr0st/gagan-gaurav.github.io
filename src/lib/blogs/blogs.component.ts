import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {

  constructor(private http: HttpClient, private cookieService: CookieService) { }

  ngOnInit(): void {
  }

  test() {
    const token = this.cookieService.get('boonjwtToken');

    console.log('token :', token);
    const headers = new HttpHeaders({ 'Authorization': `Bearer ${token}`})
    console.log('header :', headers);
    this.http.get('http://localhost:8080/api/v1/demo-controller', {headers}).subscribe({
        next: (response) => {
          // Handle the successful response
          console.log(response);
        },
        error: (error) => {
          // Handle the error
          console.error(error);
        }
    });
  }
}
