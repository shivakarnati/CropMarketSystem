import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '_service/userservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {

  request ={} as Request;
  constructor(
    private userService : UserserviceService,
    private router : Router
  ) { }
onSubmit(){
  console.log(this.request);
    this.userService.request(this.request).subscribe(
      data => {
        console.log(data);
        alert("request sent to an Admin");
      }
    );
}
  ngOnInit() {
  }

}
