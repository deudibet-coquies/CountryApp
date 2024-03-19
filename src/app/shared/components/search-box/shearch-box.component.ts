import { Component, ElementRef, EventEmitter, Input, Output, ViewChild, input } from '@angular/core';

@Component({
  selector: 'app-shearch-box',
  templateUrl: './shearch-box.component.html',
  styleUrl: './shearch-box.component.css'
})
export class ShearchBoxComponent {

  @Output()
  public onValue: EventEmitter<string> = new EventEmitter();


  @Input()
  public placeholder: string = "";

  // @ViewChild("txtInput")
  // public searchInput!: ElementRef<HTMLInputElement>;


  public search(value:string){
    this.onValue.emit(value);
  }

}
