import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name:'mailPipe'})
export class MailPipe implements PipeTransform {
    transform(value: string) {
        const mail = `mailto:${value}`;
        return mail;
    }

}
