import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IrctcModule } from '../irctc/irctc.module';
import { FormService } from './form.service';
import { BookedticketsModule } from './bookedtickets/bookedtickets.module';

@NgModule({
  imports: [
    CommonModule,IrctcModule,BookedticketsModule
  ],
  declarations: [],
  exports:[IrctcModule,BookedticketsModule],
  providers:[FormService]
})
export class CoreModule { }
