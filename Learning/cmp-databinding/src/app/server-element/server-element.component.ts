import { 
  Component,
  OnInit, Input,
  OnChanges, 
  SimpleChanges, 
  OnDestroy, 
  ViewChild, 
  ElementRef, 
  AfterViewChecked,
  AfterContentChecked,
  AfterContentInit,
  AfterViewInit,
  ContentChild
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent 
implements 
OnInit, 
OnChanges, 
OnDestroy, 
AfterViewChecked,
AfterContentInit,
AfterViewInit {

  constructor(){
    console.log('server-element was called from constructor');
  }

  ngOnInit(): void {
    console.log('server-element called from oninit');
    console.log(this.header.nativeElement.textContent);
  }

  ngOnChanges(changes: SimpleChanges): void {
      console.log(changes);
  }

  ngOnDestroy(): void {
      console.log('destroyed first server-element');
  }

  ngAfterViewChecked(): void {
      console.log('native after checked called');
  }

  ngAfterContentInit(): void {
      console.log("After content init " + this.para.nativeElement.textContent);
  }

  ngAfterViewInit(): void {
      console.log("After view init " + this.header.nativeElement.textContent);
  }

  @Input('srvElement') element: {name: string, type: string, content: string};
  @Input() name: string;

  @ViewChild('headerContent', {static:true}) header: ElementRef;

  @ContentChild('paraContent', {static: true}) para: ElementRef;
  
}
