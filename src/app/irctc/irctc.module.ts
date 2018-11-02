import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IrctcformComponent } from './irctcform/irctcform.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [IrctcformComponent],
  exports:[IrctcformComponent]
})
export class IrctcModule { }
