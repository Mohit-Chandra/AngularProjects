import { Injectable } from "@angular/core";
import { CountService } from "./CountService.service";

@Injectable()
export class UsersService{
    activeUsers = ['Max', 'Anna'];
    inactiveUsers = ['Chris', 'Manu'];
    
    constructor(private counterService: CountService){}

    onSetToInactive(id: number) {
        this.inactiveUsers.push(this.activeUsers[id]);
        this.activeUsers.splice(id, 1);
        this.counterService.inactiveCounter();
      }
      onSetToActive(id: number) {
        this.activeUsers.push(this.inactiveUsers[id]);
        this.inactiveUsers.splice(id, 1);
        this.counterService.activeCounter();
      }

}