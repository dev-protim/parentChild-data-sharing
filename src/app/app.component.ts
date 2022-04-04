import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isVisible = false;

  buttonText: string = "Next";
  child1: boolean = true;
  child2: boolean = false;
  step: string = 'generalStep';
  stepInner: boolean = true;

  constructor() {}

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }

  changeButtonText($event: any): void {
    this.buttonText = $event;
    this.step = 'saveStep';
  }

  nextStep(event: string): void {
    if (event === 'generalStep') {
      if (this.child1) {
        this.child1 = false;
        this.child2 = true;
        // this.step = 'detailsStep';
      }
    } else if (event === 'saveStep') {
      this.step = 'generalStep';
      this.buttonText = "Next";
      this.stepInner = false;
    }
    console.log(event);
  }
}
