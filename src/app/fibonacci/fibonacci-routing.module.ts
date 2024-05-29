import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FibonacciPage } from './fibonacci.page';

const routes: Routes = [
  {
    path: '',
    component: FibonacciPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FibonacciPageRoutingModule {}
