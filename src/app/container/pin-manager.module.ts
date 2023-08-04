import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { PinManagerContainerComponent } from './pin-manager-container/pin-manager-container.component';
import { PinManagerRoutingModule } from './pin-manager.routing.module';
import { PinManagerFormComponent } from './components/pin-manager-form/pin-manager-form.component';
import { PinManagerRowComponent } from './components/pin-manager-row/pin-manager-row.component';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { NumberOnlyDirective } from '../shared/directive/numbersOnly.directive';
import { DateFormatDirective } from '../shared/directive/dateFormat.directive';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';
@NgModule({
    imports: [
        CommonModule,
        PinManagerRoutingModule,
        MatInputModule,
        ReactiveFormsModule,
        MatFormFieldModule, 
        MatInputModule, 
        MatDatepickerModule, 
        MatNativeDateModule,
    ],
    declarations: [
        PinManagerContainerComponent,
        PinManagerFormComponent,
        PinManagerRowComponent,
        NumberOnlyDirective,
        DateFormatDirective
    ],
    providers: [],
})
export class PinManagerModule { }
