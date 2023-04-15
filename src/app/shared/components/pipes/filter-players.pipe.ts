import { Pipe, PipeTransform } from '@angular/core';
import { Icricketers } from '../models/data';

@Pipe({
  name: 'filterPlayers'
})
export class FilterPlayersPipe implements PipeTransform {

  transform(value: Icricketers[],searchText : string): Icricketers[] {
    console.log(value);
    console.log(searchText);   
    return value;
    
  }

}
