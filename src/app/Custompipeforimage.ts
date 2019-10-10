import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name:"imagemaintance"})
export class correctimage implements PipeTransform{
    transform(value:string) {
        var imagemaintain=value.split("\\");
        return imagemaintain[imagemaintain.length-1];
    }

}