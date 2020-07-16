import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import {User} from'../shared/user';
import {FormsModule, NgForm} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers:[UserService]
})
export class SignUpComponent implements OnInit {
  emailPattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
 
  constructor(public userService:UserService, private toastr:ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?:NgForm){
    if(form !=null)
    form.reset();
    this.userService.user={
      UserName:'',
      Password:'',
      Email:'',
      FirstName:'',
      LastName:'',
      BirthDate:null
    }
  }

  OnSubmit(form:NgForm){
    this.userService.registerUser(form.value)
    .subscribe((data:any)=>{
      if(data.Succeeded==true)
      {
      this.resetForm(form);
      this.toastr.success("Account Succesfully Created!")
    }
    else{
      this.toastr.error(data.Errors[0]);
    }
    });
  }

}