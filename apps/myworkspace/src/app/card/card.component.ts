import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'myworkspace-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input('title') title: string;
  @Input('body') body: string;
  constructor() {}

  ngOnInit() {}
}
