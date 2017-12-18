import { Directive, HostBinding, HostListener, Input, transition } from '@angular/core'

@Directive({
    selector: '[productFavorite]'
})

export class ProductFavoriteDirective {
    @HostBinding('class.item-favorite') isFavorite = true;
    @HostBinding('class.item-favorite-hover') isHovered = false;

    @HostListener('mouseenter') OnMouseEnter() {
        this.isHovered = true;
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.isHovered = false;
    }

    @Input() set productFavorite(value) {
        this.isFavorite = value;
    }
}