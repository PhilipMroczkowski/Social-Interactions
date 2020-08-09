import { Component, OnInit } from '@angular/core';
import {GroupService} from'../services/group.service';
import {NgForm, FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
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
  paramSubscription: any;
  group: Group;


  id: number;
  
  constructor(private gs:GroupService,
    private ar: ActivatedRoute, 
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
    

    this.paramSubscription = this.ar.params.subscribe(params => {
      this.id = params['_id'],
      function(err){ console.log('unable to get id');}
    })

    this.groupSubscription = this.gs.getGroup(this.id)
    .subscribe(
      group => this.group = group[0],
      function(err) {
        console.log('unable to get group');
      }
    );
      

    this.resetForm();
  }

  resetForm(form?:NgForm){

    

    this.editGroupForm = this.formBuilder.group({
      id: 1,
    name: [JSON.stringify(this.group.name)],
    numMembers: [this.group.numMembers],
    tags: [this.group.tags],
    category: [JSON.stringify(this.group.category)],
    subCategory: [this.group.subCategory],
    purpose: [this.group.purpose],
    description: [this.group.description],
    memberType: [this.group.memberType],
    groupCoverPhoto: [this.group.groupCoverPhoto]
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
      this.router.navigate(['/group/' + this.group.id]);
    },
    error => {
      this.alertService.error(error);
      this.loading= false;
    });
  }
    }
