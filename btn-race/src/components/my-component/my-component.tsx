import { Component, h } from '@stencil/core';

@Component({
  tag: 'btn-race',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  



  
  render() {
    return <div class="dropdown">
   <button class="dr-btn"> Select Race </button>
   <div class="show-data">
     <slot name="buttonraces"/>
   </div>
 </div>;
   }
}
