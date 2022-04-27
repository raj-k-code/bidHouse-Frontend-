import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SigninSignupService } from '../signin-signup.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  customerId = sessionStorage.getItem('_id');
  constructor(private _Service: SigninSignupService, private _router: Router) { }
  ngOnInit(): void {
  }

  public customerType(): boolean {

    if (sessionStorage.getItem('customerType') == "Seller")
      return true
    else
      return false
  }
  public isLoggedIn() {
    if (sessionStorage.getItem('_id'))
      return true
    else
      return false
  }

  public signOut() {
    if (confirm('Are You Sure')) {
      sessionStorage.clear();
      this._router.navigate(['/']);
    }

  }

}
