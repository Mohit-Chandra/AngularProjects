import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { Router, ActivatedRoute, Params, Data } from '@angular/router';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(private serversService: ServersService,private router:Router,
    private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.data.
    subscribe(
      (data:Data)=>{
          this.server = data['server']
      }
    );
    // const id = +this.route.snapshot.params['id'];
    // console.log("ID :"+id);
    // this.server = this.serversService.getServer(id);
    // this.route.params
    // .subscribe(
    //   (params: Params) => {
    //     this.server=this.serversService.getServer(+params['id']);
    //   }
    // );
    //this.server=this.serversService.getServer(2);
  }

  onEdit()
  {
    this.router.navigate(['edit'],{relativeTo: this.route,queryParamsHandling:'preserve'});
  }

}