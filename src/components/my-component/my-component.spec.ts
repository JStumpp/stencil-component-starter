import { flush, render } from '@stencil/core/testing';
import { MyComponent } from './my-component';
import { Checkbox } from '@ionic/core';

describe('my-component', () => {
  it('should build', () => {
    expect(new MyComponent()).toBeTruthy();
  });

  describe('rendering ionic components', () => {
    let element;
    beforeEach(async () => {
      element = await render({
        components: [MyComponent, Checkbox],
        html: '<my-component></my-component>'
      });
    });

    it('should work without parameters', () => {
      expect(element.innerHTML.trim()).toContain('input');
      console.log(element.innerHTML);
    });
  });
});