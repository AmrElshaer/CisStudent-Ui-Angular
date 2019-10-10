import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name:"converttexttohtml"})
export class converttexttohtml implements PipeTransform{
    transform(value:string) {
        while(value.includes("\"")){
            value=value.replace("\"","'");
        }
   
      
       return value;
    }

}