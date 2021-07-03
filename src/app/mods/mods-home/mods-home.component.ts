import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css'],
})
export class ModsHomeComponent implements OnInit {
  modalOpen: boolean = false;
  items: { title: string; content: string }[] = [
    { title: 'Why is sky blue', content: 'because it is' },
    {
      title: 'What does an orange tastes like?',
      content: 'An orange tastes like orange!',
    },
    { title: 'What is a cat', content: 'cat is not a dog!' },
  ];
  constructor() {}

  ngOnInit(): void {}
  onClick() {
    this.modalOpen = !this.modalOpen;
  }
}
