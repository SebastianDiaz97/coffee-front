import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'coffee';
  valor: string =''
  addItem(newItem: number){
    this.valor = `${newItem/2}px`
    console.log(this.valor);
  }
}
