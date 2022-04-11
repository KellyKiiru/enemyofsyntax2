import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyFirstCustomComponentComponent } from './my-first-custom-component/my-first-custom-component.component';
import { InterpolationComponent} from './interpolation-practise/interpolation';
import {InterpolationTrial} from './assignments/assignments';
import { PropertyBindingComponent } from './assignments/property-binding/property-binding.component';
import { EventBindingComponent } from './assignments/event-binding/event-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    MyFirstCustomComponentComponent,
    InterpolationComponent,
    InterpolationTrial,
    PropertyBindingComponent,
    EventBindingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
