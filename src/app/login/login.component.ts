import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  data:string  //string interpollation
  placeholderData="Enter username"  //property binding
  uname:any
  psw:any

  constructor(){
    this.data="@online banking"
  }

  ngOnInit():void{
  }
  login(a:any,b:any){
    this.uname=a.value
    this.psw=b.value
    console.log(this.uname,this.psw);
    
  }
  
}
