import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent {
  imgWindow(element: HTMLDivElement): void {
    element.classList.add('d-block');
    element.classList.remove('d-none');
  }
  closeImg(element: HTMLDivElement): void {
    element.classList.add('d-none');
  }
}
