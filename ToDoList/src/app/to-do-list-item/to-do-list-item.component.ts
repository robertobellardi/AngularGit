import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-to-do-list-item',
  templateUrl: './to-do-list-item.component.html',
  styleUrls: ['./to-do-list-item.component.css']
})
export class ToDoListItemComponent implements OnInit {

  @Input() id: number;
  @Input() cosaDaFare: string;
  @Input() priorita: number;

  constructor() {
  }

  ngOnInit(): void {
  }

}
