import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, NgForm, Validators } from '@angular/forms';
import { RegistrationService } from '../registration.service';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  signInForm: FormGroup;
  userId: string = "";
  password: string = "";

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
  ) {
    this.signInForm = formBuilder.group(
      {
        u_Id: ['', Validators.required],
        pass: ['', Validators.required]
      }
    );
  }

  ngOnInit(): void {
  }

  login(signInForm: any) {
  //  console.log("signInForm controls", signInForm.controls);

    this.userId = signInForm.controls.u_Id.value;
    this.password = signInForm.controls.pass.value;

    const loginObj = {
      emailId: signInForm.controls.u_Id.value,
      password: signInForm.controls.pass.value
    }
    if (this.userId === 'user' && this.password === 'password') {
      this.router.navigate(['/student']);
    } else {
        alert('Wrong Username and Password');

    }



    // if (this.userId == 'admin' && this.password == 'admin@123') {
    //   this.router.navigate(['/student']);
    // } else {
    //   alert('Wrong Username and Password');
    // }

  }

}
