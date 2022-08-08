import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit
{
  'userName': string;
  'password': string;
  'formData': FormGroup;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void
  {
    this.formData = new FormGroup({
      userName: new FormControl("Abhishek"),
      password: new FormControl("9474641628"),
    });
  }
  onClickSubmit(data: any)
  {
    this.userName = data.userName;
    this.password = data.password;
    console.log("login page:"+this.userName);
    console.log("login page:"+this.password);

    this.authService.login(this.userName, this.password)
    .subscribe(data =>{
      console.log("is login successful:"+data);
      if(data) this.router.navigate(['/home']);
    });
  }

}
