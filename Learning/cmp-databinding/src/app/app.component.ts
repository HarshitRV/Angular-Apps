import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(){
    console.log('constructor was called from app component');
  }

  ngOnInit(){
    console.log('init was called from app component');
  }

  serverElements = [{name: "Server-A", type:"server", content: "This is a test!"}];

  onServerAdded(serverData: {serverName: string, serverContent: string }) {
    this.serverElements.push({
      type: 'server', 
      name: serverData.serverName,
      content: serverData.serverContent        
      });
  }

  onBlueprintAdded(blueprintData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    });
  }

  onNameChange(){
    this.serverElements[0].name = "Changed from Server-A";
  }

  onDestroy(){
    console.log('destroyed');
    this.serverElements.shift();
  }
  
}
