import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MATERIAL_MODULES } from 'src/app/constants/material-modules';
import { AuthRoutingModule } from './auth-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ...MATERIAL_MODULES
  ]
})
export class AuthModule { }
