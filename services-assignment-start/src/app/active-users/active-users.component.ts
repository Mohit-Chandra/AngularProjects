import { Component,OnInit} from '@angular/core';
import { UsersService } from '../UsersService.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit{
 users: string[];
 ngOnInit()
 {
   this.users=this.userService.activeUsers;
 }
 // @Output() userSetToInactive = new EventEmitter<number>();
 constructor(private userService:UsersService){}

  onSetToInactive(id: number) {
   // this.userSetToInactive.emit(id);
   this.userService.onSetToInactive(id);
  }
}
