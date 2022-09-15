import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '_service/userservice.service';
import { Router } from '@angular/router';
import { UserRegistration } from '_interface/registration';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  register ={} as UserRegistration;

  
  constructor(
    private router : Router,
    private userService : UserserviceService,

  ) { }

  onSubmit(){
    console.log(this.register);
    this.userService.registration(this.register).subscribe(
      data =>{
        console.log(data);
        alert("registration succesful");
      }
    
    )
  }
  ngOnInit() {
  }
  login(){
    this.router.navigate(['/login']);
  }

}
