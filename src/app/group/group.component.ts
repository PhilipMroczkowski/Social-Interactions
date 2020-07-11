import { Component, OnInit } from '@angular/core';
import { Group } from '../shared/group';
import { GroupService } from '../shared/group.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {

  paramSubscription: any;
  groupSubscription: any;
  group: Group;

  constructor(
    private gs: GroupService
  ) { 
    /*this.groupName = 'sample group name';
    this.tags = ['Gaming', 'Sports', 'Food'];
    this.groupCategory = 'Playing Games';
    this.groupSubCategory = 'Social';
    this.groupAdmin = 'user name';
    this.groupDescription = 'This is a sample group!';
    this.groupPhoto = 'assets/img/gamingtemp.jpg';*/
  }

  ngOnInit() {
    /*this.paramSubscription = this.ar.params.subscribe(params => {
      this.group.id = params['id'],
      function(err) {console.log('unable to get id');
      }
    });*/

    this.groupSubscription = this.gs.getGroup(1)
    .subscribe(
      group => this.group = group[0],
      function(err){console.log('unable to get group');
      }
    );
  }

  ngOnDestroy(){
    if (this.paramSubscription)
      this.paramSubscription.unsubscribe();
    if (this.groupSubscription)
      this.groupSubscription.unsubscribe();
  }



}