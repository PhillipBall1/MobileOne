import { ElementRef } from '@angular/core';
import { FadeInDirective } from './fade-in.directive';

describe('FadeInDirective', () => {
  it('should create an instance', () => {
    const mockElementRef: ElementRef = new ElementRef(document.createElement('div'));
    const directive = new FadeInDirective(mockElementRef);
    expect(directive).toBeTruthy();
  });
});
