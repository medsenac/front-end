import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListaSujeitosPage } from './lista-sujeitos';

@NgModule({
  declarations: [
    ListaSujeitosPage,
  ],
  imports: [
    IonicPageModule.forChild(ListaSujeitosPage),
  ],
})
export class ListaSujeitosPageModule {}
