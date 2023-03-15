import { Directive, Input, 
  TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appNgNotIf]'
})
export class NgNotIfDirective {

  constructor(private temptlateRef: TemplateRef<any>
    , private viewcontainerRef: ViewContainerRef) { }

  @Input('appNgNotIf') set propertyCondition(condition: boolean){
    if(!condition){
      this.viewcontainerRef.createEmbeddedView(this.temptlateRef);
    } else {
      this.viewcontainerRef.clear();
    }
  }

}
