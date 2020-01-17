import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'taxe'
})
export class TaxePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {

    let tax = args[0] || 20;
    //Utilisation de pipe number ou :
    //let result = value * (1 + tax / 100);


    return  value * (1 + tax / 100) // result.toFixed(2).replace ('.', ',') + ' €';
  }

}
