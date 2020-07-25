import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

import {FormsModule, NgForm, FormBuilder, Validators, FormGroup} from '@angular/forms';

import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AuthenticationService } from '@/services/authentication.service';
import { AlertService } from '@/services/alert.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers:[UserService]
})
export class SignUpComponent implements OnInit {
  submitted = false;
  emailPattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  registerForm: FormGroup;
  loading = false;
 
  constructor(  
    private formBuilder: FormBuilder,
    private router: Router,
    private authenticationService: AuthenticationService,
    private userService: UserService,
    private alertService: AlertService
  ) 
  { 
    // redirect to home if already logged in
    if (this.authenticationService.currentUserValue) { 
        this.router.navigate(['/']);
    }
}

ngOnInit() {
  this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      username: ['', Validators.required],
      birthDate: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
  });
}

  /*resetForm(form?:NgForm){
    if(form !=null)
    form.reset();
    this.userService.user={
      username:'',
      password:'',
      email:'',
      name:'',
      birthDate:null,
      //Info not used in submission form
      phoneNumber:'',
      address: '',
      postalCode: '',
      favouriteEvents: '',
      favouriteGroups: '',
      joinedGroups: '',
    
      interests: ''
    }
  }
  */
 get f() { return this.registerForm.controls; }

 onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }

        this.loading = true;
        this.userService.register(this.registerForm.value)
            .pipe(first())
            .subscribe(
                data => {
                    this.alertService.success('Registration successful', true);
                    this.router.navigate(['/login']);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }
}