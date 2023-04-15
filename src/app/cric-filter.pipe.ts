import { Pipe, PipeTransform } from '@angular/core';
import { Icricketers } from './shared/components/models/data';

@Pipe({
  name: 'cricFilter'
})
export class CricFilterPipe implements PipeTransform {

  transform(value: Icricketers[],searchText : string): Icricketers[] {
    // console.log(searchText);   
    // return value;

    if(!value){
      return []
    }

    if(!searchText){
      return value
    }

    let filteredArray = value.filter(playerObj => {
      return playerObj.country.toLowerCase().startsWith(searchText)
    })
    return filteredArray
  }

}
