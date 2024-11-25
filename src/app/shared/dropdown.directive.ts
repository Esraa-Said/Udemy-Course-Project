import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropdown]',
  standalone: true,
})
export class DropdownDirective {
  private isShow = false; // Track dropdown state

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('click') onClick() {
    const dropdownMenu = this.el.nativeElement.nextElementSibling; 
    console.log(dropdownMenu)
    if (dropdownMenu) {
      this.isShow = !this.isShow; // Toggle the state
      if (this.isShow) {
        this.renderer.addClass(dropdownMenu, 'show');
      } else {
        this.renderer.removeClass(dropdownMenu, 'show');
      }
    }
  }
}
