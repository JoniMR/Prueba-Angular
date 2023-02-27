import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { ListComponent } from './components/list/list.component';
import { IndexComponent } from './pages/index/index.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    ListComponent,
    IndexComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    MaterialModule
  ],
  exports: [
    IndexComponent
  ]
})
export class PublicModule { }
