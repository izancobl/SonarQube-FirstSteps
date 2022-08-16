import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})

export class HeroeComponent implements OnInit {
  numbers :number[] = [1,2,3,4,5,6,7,8,9,10];
  addedNumber: number = 0;
  constructor() {
  }

  ngOnInit(): void {
  }

  modify_array(): void{
    for(var i = 0; this.numbers.length>i; i++){
      this.numbers[i]*= this.addedNumber;
    }
    var random = Math.random()*10;
    for(var i = 0; this.numbers.length>i; i++){
      this.numbers[i]/= random;
    }
  }

  increase_array(): void{
    for(var i = 0; this.numbers.length>i; i++){
      this.numbers[i]*= this.addedNumber;
    }
  }

  reset_numbers():void {
    this.numbers = [1,2,3,4,5,6,7,8,9,10];
  }

}
