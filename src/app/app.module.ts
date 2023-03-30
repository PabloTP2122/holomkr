import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//CDK
import { OverlayModule } from '@angular/cdk/overlay';
import { MechatronicpComponent } from './components/mechatronicp/mechatronicp.component';

//Google Analytics
import { GoogleTagManagerModule } from 'angular-google-tag-manager';
import { WebprojectsComponent } from './components/webprojects/webprojects.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    AppComponent,
    MechatronicpComponent,
    WebprojectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OverlayModule,
    GoogleTagManagerModule.forRoot({
      id: 'G-M7YXF56457',
    }),
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
