import { Component } from '@angular/core';
import { CoffeesService } from '../coffees.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  constructor(private coffeesService: CoffeesService){}

  oculto = true
  array:any
  urlImagen = ''

  ngOnInit(){
    this.coffeesService.getDatos().subscribe(datos=>{
      this.array =datos
      datos.forEach((element:any) => {
        console.log(element);
      });
    })
  }
}
