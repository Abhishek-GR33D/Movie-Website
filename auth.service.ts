import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
import {tap,delay} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService
{
  isUserLoggedIn: boolean = false;
  login(UserName: string, password: string): Observable<boolean>
  {
    console.log(UserName);
    console.log(password);
    this.isUserLoggedIn = UserName == 'Abhishek' && password == '9474641628';
    localStorage.setItem('isUserLoggedIn',this.isUserLoggedIn ? 'true' : 'false');
    return of(this.isUserLoggedIn).pipe
    (
      delay(1000),
      tap(val =>[console.log("Is User Authentication Success:" + val)])
    );
  }
  logout():void
  {
    this.isUserLoggedIn =false;
    localStorage.removeItem('isUserLoggedIn');
  }
  constructor() { }
}
