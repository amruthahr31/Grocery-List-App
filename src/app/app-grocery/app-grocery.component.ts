import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-grocery',
  templateUrl: './app-grocery.component.html',
  styleUrls: ['../../assets/bootstrap-4.5.2-dist/css/bootstrap.min.css','./app-grocery.component.css']
})
export class AppGroceryComponent implements OnInit {
  task: string;
  tasks = [];
  pos: number;
  taskitem: string;
  constructor() { }

  ngOnInit(): void {
    
  }

  onClickAdd(){
  this.tasks.push({name: this.task});
  this.task = '';
  }
  
  onClickRemoveItem(item) {
    console.log("item:", item);
    let index = this.tasks.findIndex((listitem) => listitem.name === item);
    console.log("pos", index);
    this.tasks.splice(index, 1);
    
  }

  onClickReset() {
    this.tasks.splice(0, this.tasks.length);
    this.task = "";
  }
  

}
