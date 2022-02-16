import { Component, Output, EventEmitter, ViewChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit{

  constructor(){
    console.log('constructor called from cockpit');
  }

  ngOnInit(): void {
      console.log('called from cockpit')
  }

  @Output('serverC') serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output('blueprintC') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  
  // This allows to get the input content globally within the component.
  @ViewChild('serverContent', {static: true}) serverContent: ElementRef;

  onAddServer(serverName: HTMLInputElement){
    // console.log(this.serverContent);
    this.serverCreated.emit({
      serverName: serverName.value,
      serverContent: this.serverContent.nativeElement.value
    })
  }

  onAddBlueprint(serverName: HTMLInputElement){
    this.blueprintCreated.emit({
      serverName: serverName.value,
      serverContent: this.serverContent.nativeElement.value
    })
  }

} 
