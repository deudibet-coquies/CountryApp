import { Component, EventEmitter, Input, Output, OnInit, OnDestroy } from '@angular/core';
import { debounceTime, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-shearch-box',
  templateUrl: './shearch-box.component.html',
  styleUrl: './shearch-box.component.css'
})
export class ShearchBoxComponent implements OnInit, OnDestroy {
  
 
  constructor() {
    
  }
  

  ngOnInit(): void {
   this._ds = this.debouncer.pipe(
      debounceTime(500)
    ).subscribe(value => {
      this.onDebounce.emit(value);
    })
  }

  ngOnDestroy(): void {
    this._ds?.unsubscribe
  }

  private debouncer: Subject<string> = new Subject<string>();
  private _ds?: Subscription;

  @Output()
  public onValue: EventEmitter<string> = new EventEmitter();

  @Output()
  public onDebounce: EventEmitter<string> = new EventEmitter();

  @Input()
  public placeholder: string = "";

  @Input()
  public initialValue: string = "";

  // @ViewChild("txtInput")
  // public searchInput!: ElementRef<HTMLInputElement>;


  public search(value:string){
    this.onValue.emit(value);
  }

  onKeyPress(value:string){
    this.debouncer.next(value)
  }

}
