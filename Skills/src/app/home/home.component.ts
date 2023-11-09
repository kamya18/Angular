import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  // customerName:string = 'axle';
  // email: string | undefined;
  // password: string | undefined;
  public isLoggedIn:boolean=false;
  constructor(private profile:ProfileService) { }

  // onSubmit(form:NgForm){
  //   console.log(form.value);
  // }


  ngOnInit(): void {
    this.isLoggedIn = this.profile.LoggedInStatus();
  }
}
