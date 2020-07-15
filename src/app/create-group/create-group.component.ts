import { Component, OnInit } from '@angular/core';
import {GroupService} from'../shared/group.service';
import {FormsModule, NgForm} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-create-group',
  templateUrl: './create-group.component.html',
  styleUrls: ['./create-group.component.css']
})
export class CreateGroupComponent implements OnInit {

  //emailPattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
 
  constructor(public groupService:GroupService, private toastr:ToastrService) { }

  ngOnInit() {
    //this.resetForm();
  }
/*
  resetForm(form?:NgForm){
    if(form !=null)
    form.reset();
    this.groupService.group={
      
    }
  }

  OnSubmit(form:NgForm){
    this.groupService.CreateGroup(form.value)
    .subscribe((data:any)=>{
      if(data.Succeeded==true)
      {
      this.resetForm(form);
      this.toastr.success("Group Succesfully Created!")
    }
    else{
      this.toastr.error(data.Errors[0]);
    }
    });
  }*/

}
