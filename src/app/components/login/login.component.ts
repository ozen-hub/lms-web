import {Component} from '@angular/core';
import {MatFormField, MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {Router, RouterLink} from "@angular/router";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth/auth.service";
import { CookieManagerService } from '../../services/cookie/CookieManager.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatInput,
    MatFormFieldModule,
    MatButton,
    RouterLink,
    ReactiveFormsModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(private auth: AuthService, private router: Router, private cookieService:CookieManagerService) {


  }

  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  })

  login() {
    this.auth.login(
      this.form.value.email!,
      this.form.value.password!
    ).subscribe(response => {
      this.cookieService.create(response.access_token);
      this.router.navigateByUrl('/user');
    })
  }
}
