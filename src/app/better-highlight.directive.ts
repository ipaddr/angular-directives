import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  @HostBinding('style.backgroundColor') backgroundColor: string = 'lightgreen'
  @Input('appBetterHighlight') defaultColor: string = 'lightgreen';
  @Input() highlightColor: string = 'lightgrey';
  @Input() leaveColor: string = 'transparent';

  constructor(private elementRef: ElementRef
    , private renderer: Renderer2) { }

  ngOnInit(): void {
    // this.renderer.setStyle(this.elementRef.nativeElement
    //   , 'background-color', 'lightgreen');
    this.backgroundColor = this.defaultColor;
}

  @HostListener('mouseenter') mouseenterEvent(event: Event){
    // this.renderer.setStyle(this.elementRef.nativeElement
    //   , 'background-color', 'lightgrey');
    this.backgroundColor = this.highlightColor;
  }
  
  @HostListener('mouseleave') mouseleave(event: Event){
    // this.renderer.setStyle(this.elementRef.nativeElement
    //   , 'background-color', 'transparent');
      this.backgroundColor = this.leaveColor;
  }

}
