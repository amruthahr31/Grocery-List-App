import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-grocery',
  templateUrl: './app-grocery.component.html',
  styleUrls: ['../../assets/bootstrap-4.5.2-dist/css/bootstrap.min.css','./app-grocery.component.css']
})
export class AppGroceryComponent implements OnInit {
  task: string;
  tasks = [];
  constructor() { }

  ngOnInit(): void {
  }

  onClickAdd(){
  this.tasks.push({name: this.task});
  this.task = '';
}

  onClickReset() {
    this.tasks.splice(0, this.tasks.length);
    this.task = "";
  }
  
  onClickRemove(){
    this.tasks.pop();
    
  }
}
