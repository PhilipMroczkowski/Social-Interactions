import { Component, OnInit } from '@angular/core';
import {Group} from '../models/group';
import {GroupService} from '../services/group.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-group-dashboard',
  templateUrl: './group-dashboard.component.html',
  styleUrls: ['./group-dashboard.component.css']
})
export class GroupDashboardComponent implements OnInit {

  groups: Group[];
  getGroupsSub: any;
  loadingError: boolean=false;

  filteredGroups: Group[];

  constructor(private groupService : GroupService, private router: Router) { }

  ngOnInit() {
    this.getGroupsSub = this.groupService.getAllGroups().subscribe(data => {
      this.groups = data;
      this.filteredGroups = data;
    }, error => {
        this.loadingError = true;
    });
  }

  onGroupSearchKeyUP(event:any){
    let my_filter: string = event.target.value.toLowerCase();
    this.filteredGroups =  this.groups.filter((group) => 
    ((group.name.toLowerCase().indexOf(my_filter) != -1) || 
    (group.description.toLowerCase().indexOf(my_filter) != -1) ||
    (group.category.toLowerCase().indexOf(my_filter) != -1)))
  }

  routeGroup(id: number){
    this.router.navigate(['/group/', id]);
  }

  ngOnDestroy(){
    if(this.getGroupsSub != 'undefined'){
      this.getGroupsSub.unsubscribe();
    }
  }

}
