import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrls: ['./views-home.component.css'],
})
export class ViewsHomeComponent implements OnInit {
  statistics: { value: number; label: string }[] = [
    { value: 3000, label: 'views' },
    { value: 1500, label: 'subscribers' },
    { value: 500, label: 'cash' },
  ];

  items = [
    {
      title: 'man',
      description: 'this is a man',
      image: 'assets/images/man.jpeg',
    },
    {
      title: 'women',
      description: 'this is a women',
      image: 'assets/images/women.jpeg',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
