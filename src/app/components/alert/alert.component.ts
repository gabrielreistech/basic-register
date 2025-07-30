import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.css'
})
export class AlertComponent implements OnInit{

  show = false;
  width = 0;
  intervalId: any;

  constructor(private route:Router) {}

  ngOnInit(): void {}

  showAlert(): void {
    this.show = true;
    this.width = 0;
    this.move();
    setTimeout(() => {
      this.hideAlert();
      this.route.navigate(['/listregister']);
     }, 2500);
  }

  hideAlert(): void {
    this.show = false;
    clearInterval(this.intervalId);
  }

  move(): void {
    this.intervalId = setInterval(() => {
      if (this.width >= 100) {
        clearInterval(this.intervalId);
      } else {
        this.width += 1;
      }
    }, 25);
  }
}
