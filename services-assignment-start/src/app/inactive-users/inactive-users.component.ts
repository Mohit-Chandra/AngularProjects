import { Component, OnInit } from '@angular/core';
import { UsersService } from '../UsersService.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit{
  users: string[];
 // @Output() userSetToActive = new EventEmitter<number>();
 ngOnInit()
 {
   this.users=this.userService.inactiveUsers;
 }

 constructor(private userService:UsersService){}
  onSetToActive(id: number) {
    //this.userSetToActive.emit(id);
    this.userService.onSetToActive(id);
  }
}
