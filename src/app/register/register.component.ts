import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  acnum:any
  uname:any
  psw:any

  constructor(){}
  ngOnInit():void{}

  register(){
    console.log(this.acnum,this.uname,this.psw);
    
  }

}
