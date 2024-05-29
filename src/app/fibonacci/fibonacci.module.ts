import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FibonacciPageRoutingModule } from './fibonacci-routing.module';

import { FibonacciPage } from './fibonacci.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FibonacciPageRoutingModule
  ],
  declarations: [FibonacciPage]
})
export class FibonacciPageModule {}
