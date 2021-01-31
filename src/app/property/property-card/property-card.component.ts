/**
 * Technically angular component is a type script class decorated by @Component
 * Decorators gives us a way to modify the behavious of class or properties just by placing it on the top of class or at the left of a property. We can see how we can use the decorators for properties
 * Decorators accepts objects as a parameter
 */

import { Component } from "@angular/core";

 @Component({
   selector: 'app-property-card',
   templateUrl: 'property-card.component.html',
   styleUrls: ['property-card.component.css']
   //template: `<h1>I am a card</h1>`,
   //styles: ['h1{font-weight:normal;}']

 })
 export class PropertyCardComponent{
  Property: any = {
    "Id":1,
    "Name":"Hyde Park",
    "Type":"House",
    "Price":15000
  }
 }
