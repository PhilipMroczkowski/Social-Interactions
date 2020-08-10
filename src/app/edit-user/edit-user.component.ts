import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { FormBuilder, FormGroup, Validators, FormControl, NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import { AuthenticationService } from '../services/authentication.service';
import { AlertService } from '../services/alert.service';
import { User } from '@/models/user';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  editUserForm: FormGroup;
  loading = false;
  submitted = false;
  userSubscription: any;
  paramSubscription: any;
user:User;
  id: number;

  title = 'email-validation';
  email = new FormGroup({
    emailCheck: new FormControl('',[
      Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")])
   
  }); 

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authenticationService: AuthenticationService,
    private userService: UserService,
    private alertService: AlertService,
    private ar: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.paramSubscription = this.ar.params.subscribe(params => {
      this.id = params['_id'],
      function(err){ console.log('unable to get id');}
    })

    this.userSubscription = this.userService.getById(this.id)
    .subscribe(
      user => this.user = user[0],
      function(err) {
        console.log('unable to get user');
      }
    );
  }

  resetForm(form?:NgForm){
    this.editUserForm = this.formBuilder.group({
      username: [''],
      email: [''],
      phoneNumber:[''],
      address: [''],
      postalCode: [''],
      favouriteEvents: [''],
      favouriteGroups: [''],
      joinedGroups: [''],
      interests: ['']
    })
  }
  get f() { return this.editUserForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.editUserForm.invalid) {
        return;
    }

    this.loading = true;
    this.userService.update(this.editUserForm.value)
        .pipe(first())
        .subscribe(
            data => {
                this.alertService.success('User Edited!')
            },
            error => {
                this.alertService.error(error);
                this.loading = false;
            });
}
}
