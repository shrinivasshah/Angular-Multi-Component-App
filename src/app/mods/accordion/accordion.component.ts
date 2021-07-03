import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css'],
})
export class AccordionComponent implements OnInit {
  @Input() items = [] as any;
  openedItemIndex = 0;
  constructor() {}

  onClick(index: number) {
    if (this.openedItemIndex === index) {
      this.openedItemIndex = -1;
    } else {
      this.openedItemIndex = index;
    }
  }

  ngOnInit(): void {}
}
