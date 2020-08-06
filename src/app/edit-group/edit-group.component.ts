import { Component, OnInit } from '@angular/core';
import {GroupService} from'../services/group.service';
import {NgForm, FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from '../services/alert.service';
import { AuthenticationService } from '../services/authentication.service';
import { first } from 'rxjs/operators';
import { Group } from '../models/group';

@Component({
  selector: 'app-edit-group',
  templateUrl: './edit-group.component.html',
  styleUrls: ['./edit-group.component.css']
})
export class EditGroupComponent implements OnInit {
  editGroupForm: FormGroup;
  loading = false;
  submitted = false;
  groupSubscription: any;
  group: Group;
   
  constructor(private gs:GroupService, 
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

    this.groupSubscription = this.gs.getGroup(1)
    .subscribe(
      group => this.group = group[0],
      function(err) {
        console.log('unable to get group');
      }
    );
  }

  resetForm(form?:NgForm){
    this.editGroupForm = this.formBuilder.group({
      id: [this.group.id],
      name: [this.group.name],
      numMembers: [this.group.numMembers],
      tags: [this.group.tags, Validators.required],
      category: [this.group.category, Validators.required],
      subCategory: [this.group.category, Validators.required],
      purpose: [this.group.purpose, [Validators.required, Validators.minLength(6)]],
      description: [this.group.description, Validators.required],
      memberType: [this.group.memberType, Validators.required],
      groupCoverPhoto: [this.group.groupCoverPhoto, Validators.required]
  });
}
get f() { return this.editGroupForm.controls;}

  OnSubmit(){
    this.submitted = true;

    if(this.editGroupForm.invalid){
      return;
    }

    this.loading = true;

    this.gs.editGroup(this.editGroupForm.value)
    .pipe(first())
    .subscribe(data => {
      this.alertService.success('Group edited!', true);
      this.router.navigate(['/groups']);
    },
    error => {
      this.alertService.error(error);
      this.loading= false;
    });
  }
    }
