import { Component, EventEmitter, Input, OnInit, Output, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child-one',
  templateUrl: './child-one.component.html',
  styleUrls: ['./child-one.component.scss']
})
export class ChildOneComponent implements OnInit, OnChanges {

  @Input() stepInner: boolean = true;
  @Output() changeButtonText = new EventEmitter<any>();

  arrayList: any[] = [
    {
      title: "Content One",
      paragraph: "Lorem ipsum dolor sit amet",
      active: false
    },
    {
      title: "Content Two",
      paragraph: "Lorem ipsum dolor sit amet",
      active: false
    }
  ]

  initial: boolean = true;
  details: boolean = false;
  message: string = "save";

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: any): void {
    changes.stepInner.currentValue;
    console.log(changes.stepInner.currentValue, "changes");
    if (changes.stepInner.currentValue === false) {
      this.initial = true;
      this.details = false;
    }
  }

  itemSelect(item: any) {
    this.arrayList.forEach(element => {
      element.active = false;
    });
    item.active = true;
  }

  enterDetails(): void {
    this.initial = false;
    this.details = true;
    this.changeButtonText.emit(this.message);
  }

}
