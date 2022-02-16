import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { HardwareListComponent } from './hardware-list/hardware-list.component';
import { HardwareDetailsComponent } from './hardware-details/hardware-details.component';
import { CartService } from './cart.service';
import {HttpService} from "./http-rest-service/http-service.service";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalReplaceComponent } from './modal-replace/modal-replace.component';
import {MatButtonModule, MatDialogModule} from "@angular/material";
import { ModalFixComponent } from './modal-fix/modal-fix.component';
import { ShowAllHardwaresComponent } from './show-all-hardwares/show-all-hardwares.component';
import { DefaultPageComponentComponent } from './default-page-component/default-page-component.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
      MatDialogModule,
      MatButtonModule,

    RouterModule.forRoot([
      { path: '', component: DefaultPageComponentComponent},
      { path: 'allHardwares', component: ShowAllHardwaresComponent},
      { path: 'productList', component: HardwareListComponent },
      { path: 'products/:productId', component: HardwareDetailsComponent },
    ]),

  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    HardwareListComponent,
    HardwareDetailsComponent,
    ModalReplaceComponent,
    ModalFixComponent,
    ShowAllHardwaresComponent,
    DefaultPageComponentComponent
  ],
  bootstrap: [ AppComponent ],
  providers: [CartService, HttpService],
  entryComponents: [ModalReplaceComponent,  ModalFixComponent]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/