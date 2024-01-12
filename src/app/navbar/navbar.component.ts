import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent {
  @Output() newItemEvent = new EventEmitter<number>()
  
  height: number=0;
  heightNatural: number=0;
  widthNatural: number=0;

 
  getImageSize(event: any) {
     this.height = event.target.height;
     this.heightNatural = event.target.naturalHeight;
     this.widthNatural = event.target.naturalWidth;
     this.newItemEvent.emit(this.height)
  }

  prueba(event: any){
    // console.log(event.target.innerWidth);
    let con = this.widthNatural / event.target.innerWidth
    // console.log(this.heightNatural/con);
    this.newItemEvent.emit(this.heightNatural/con)
  }
}

