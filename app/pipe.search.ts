import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'search'
})

export class SearchPipe implements PipeTransform  {
    transform(pipeData, pipeModifier) {
        return  pipeData.filter((eachItem)=> {
        return  eachItem['ProductName'].toLowerCase().includes(pipeModifier.toLowerCase()) ||
                eachItem['CategoryName'].toLowerCase().includes(pipeModifier.toLowerCase());
        });
      }
}
