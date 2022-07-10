import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templateform',
  templateUrl: './templateform.component.html',
  styleUrls: ['./templateform.component.css']
})
export class TemplateformComponent implements OnInit {
  public name = '';
  constructor() { }

  ngOnInit(): void {
  }

  public submitData() {
    console.log(this.name);
  }
}
