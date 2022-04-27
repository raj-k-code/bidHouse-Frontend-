import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SigninSignupService {


  signupUrl = "https://real-bidhouse.herokuapp.com/customer/signup"
  signinUrl = "https://real-bidhouse.herokuapp.com/customer/signin"
  googleUrl = "https://real-bidhouse.herokuapp.com/customer/socialSign";


  constructor(private _http: HttpClient) { }

  public signup(username: String, email: String, password: String, mobile: Number, address: String, customerRoll: String) {
    return this._http.post<any>(this.signupUrl, { username: username, email: email, password: password, mobile: mobile, address: address, customerRoll: customerRoll });
  }
  public signin(email: string, password: string) {
    return this._http.post<any>(this.signinUrl, { email: email, password: password })
  }

  public googleSignin(email: string) {
    return this._http.post<any>(this.googleUrl, { email: email })
  }

  public CheckToken(): boolean {
    return !!localStorage.getItem('jwtToken');
  }
}
