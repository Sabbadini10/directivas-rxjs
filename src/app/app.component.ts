import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'directivas';

visible: boolean = true;
setVisible(){
  this.visible = !this.visible
}

  ngOnInit(){
this.title = 'APRENDIENDO RXJS';
  }

  ngOnDestroy(){
this.title = 'COMPONENTE DESTRUIDO';
  }
}
