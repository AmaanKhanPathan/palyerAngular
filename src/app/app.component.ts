import { Component } from '@angular/core';
import { Icricketers, Ifiles } from './shared/components/models/data';
import { cricketers } from './shared/const/players';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis nesciunt vitae quidem atque, nisi accusamus dolor at voluptatem provident ut ipsam, incidunt pariatur repudiandae in dicta tenetur. Magnam esse, iste reiciendis deserunt corrupti dolorem quam molestiae voluptatum laudantium, dicta nisi? Inventore nulla laborum cumque, dolorem fugit voluptas alias quo tempora?';
  serarchByValue! : string;

  filesArray : Array<Ifiles> = [
    {
      name : "Form 16",
      size : 22666998,
      type : 'pdf'
    },
    {
      name : "Salry Slips",
      size : 82558847,
      type : 'pdf'
    },
    {
      name : "TDC",
      size : 98766998,
      type : 'pdf'
    },
  ]

  playersArray : Icricketers[] = cricketers; 


}
