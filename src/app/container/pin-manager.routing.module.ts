import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PinManagerContainerComponent } from './pin-manager-container/pin-manager-container.component';
import { CommonModule } from '@angular/common';

export const routes: Routes = [
    {
        path: '',
        component: PinManagerContainerComponent
    }
]

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule] 
})

export class PinManagerRoutingModule {}