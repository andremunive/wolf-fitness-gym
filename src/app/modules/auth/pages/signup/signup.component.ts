import {   Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  selected = true;
  man = 'selected';
  woman = 'unselected'
  constructor() { }

  ngOnInit(): void {
  }

  changeSelected(){
    this.selected = !this.selected
    if(!this.selected){
      this.man = 'unselected'
      this.woman = 'selected'
    }else{
      this.man = 'selected'
      this.woman = 'unselected'
    }
  }

}
