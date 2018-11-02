import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookedticketsComponent } from './bookedtickets/bookedtickets.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { FormService } from '../form.service';


@NgModule({
  imports: [
    CommonModule,FormsModule,HttpClientModule
  ],
  exports:[BookedticketsComponent],
  declarations: [BookedticketsComponent],

})
export class BookedticketsModule { }
