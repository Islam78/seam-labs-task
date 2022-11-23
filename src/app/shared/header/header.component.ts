import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authSer: AuthService, private router: Router) { }
  IsLogeed: boolean
  ngOnInit(): void {
    this.IsLogeed = localStorage.getItem('usermeta') ? true : false
  }
  logout() {
    this.IsLogeed = false
    this.authSer.logOut();
    this.router.navigate(['/login'])
  }


}
