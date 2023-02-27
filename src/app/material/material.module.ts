import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon'

import { MaterialRoutingModule } from './material-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialRoutingModule,
  ],
  exports: [
    DragDropModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class MaterialModule { }
