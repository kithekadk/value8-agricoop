import { Pipe, PipeTransform } from '@angular/core';
import { UserRequest } from '../interfaces/Userrequest';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: UserRequest[], name: string): UserRequest[] {
    if (!value || name === ''){
      
      return value
    }
    const filtered : UserRequest[]=[]

    for(let item of value){
      if (item.productName.toLowerCase().includes(name.toLowerCase())){
        filtered.push(item);
      }
    }
    return filtered;
  }

}
