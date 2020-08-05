import { Component, OnInit } from '@angular/core';
import { MatRadioModule } from '@angular/material/radio';
import {GroupService} from'../services/group.service';
import {FormsModule, NgForm, FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from '../services/alert.service';
import { AuthenticationService } from '../services/authentication.service';
import { first } from 'rxjs/operators';
import { from } from 'rxjs';

@Component({
  selector: 'app-create-group',
  templateUrl: './create-group.component.html',
  styleUrls: ['./create-group.component.css']
})
export class CreateGroupComponent implements OnInit {

inputMemberType: string;

 memberTypes: string[] = ['All Ages', 'Over 18'];

  createGroupForm: FormGroup;
  loading = false;
  submitted = false;
 
  constructor(private groupService:GroupService, 
    private formBuilder: FormBuilder,
    private router: Router,
    private alertService: AlertService,
    private authenticationService: AuthenticationService) { 
      //redirect to login page if not logged in
      if (!this.authenticationService.currentUserValue) { 
        this.router.navigate(['/login']);
    }
    }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?:NgForm){
    this.createGroupForm = this.formBuilder.group({
      name: ['', Validators.required],
      tags: ['', Validators.required],
      category: ['', Validators.required],
      subCategory: [''],
      purpose: ['', [Validators.required, Validators.minLength(6)]],
      description: ['', Validators.required],
      memberType: ['All Ages', Validators.required],
      groupCoverPhoto: ['http://via.placeholder.com/640x360', Validators.required]
  });
  }

get f() { return this.createGroupForm.controls;}

  OnSubmit(){
    this.submitted = true;

    if(this.createGroupForm.invalid){
      return;
    }

    this.loading = true;

    this.groupService.createGroup(this.createGroupForm.value)
    .pipe(first())
    .subscribe(data => {
      this.alertService.success('Group created!', true);
      this.router.navigate(['/groups']);
    },
    error => {
      this.alertService.error(error);
      this.loading= false;
    });
  }

}
