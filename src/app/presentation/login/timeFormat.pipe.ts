import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'timeFormat',
    standalone: true
})
export class timeFormatPipe implements PipeTransform {

  transform(time: number|null): string {
    
    if(time){
      const minutes = Math.floor(time / 60),
        seconds = time - minutes * 60,
        str_pad_left = (number: number, pad: string, length: number) => {
        return (new Array(length + 1).join(pad) + number).slice(-length);
      }
  
      return "Expire in "+str_pad_left(minutes, '0', 2) + ':' + str_pad_left(seconds, '0', 2);

    } else{
      return 'Expired';
    }

  }

}
