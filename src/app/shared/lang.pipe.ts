import { Pipe, PipeTransform, Renderer2 } from '@angular/core';

@Pipe({
  name: 'lang'
})
export class LangPipe implements PipeTransform {
constructor(private rendrer:Renderer2) {}
  transform(text:string,elementt:any): any {
    if (text.charCodeAt(0) > 200) {
    this.rendrer.setStyle(elementt,'textAlign',"right")
    this.rendrer.setStyle(elementt,'direction',"rtl")
  }
    return text
  }

}
