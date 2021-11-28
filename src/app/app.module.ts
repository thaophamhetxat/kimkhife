import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {NavBarComponent} from './shared/nav-bar/nav-bar.component';
import {FooterComponent} from './shared/footer/footer.component';

import {ProductHomeComponent} from './product/product-home/product-home.component';
import {ProductEditComponent} from './product/product-edit/product-edit.component';
import {ProductCreateComponent} from './product/product-create/product-create.component';
import {ReactiveFormsModule} from "@angular/forms";

import {AngularFireStorageModule} from "@angular/fire/compat/storage";
import {AngularFireAuthModule} from "@angular/fire/compat/auth";
import {AngularFireModule} from "@angular/fire/compat";
import {environment} from "../environments/environment";


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    ProductHomeComponent,
    ProductEditComponent,
    ProductCreateComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
