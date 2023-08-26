import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], filterString: string): any[] {
    const result: any =[];
    if(!value || filterString==='' || filterString=== undefined){
      return value;
    }else{
       value.filter((data)=>{
        if (data.strAlcoholic ===  filterString){
          result.push(data);
        }
      })
    }
    return result;
  }

}
