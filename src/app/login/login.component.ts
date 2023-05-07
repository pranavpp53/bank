import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  data:string  //string interpollation
  placeholderData="Enter username"  //property binding
  constructor(){
    this.data="@online banking"
  }

  ngOnInit():void{
  }
  login(){
    alert("login clicked")
  }
  unameChange(event:any){
    console.log(event.target.value);
    

  }

}
