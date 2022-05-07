import { NgModule } from '@angular/core';
import { BrowserModule, HammerModule, HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { KatexModule } from 'ng-katex';

import { AppComponent } from './app.component';
import { CardViewerComponent } from './card-viewer/card-viewer.component';
import { CardsetSelectorComponent } from './cardset-selector/cardset-selector.component';
import { AppRoutingModule } from './app-routing.module';
import { CardsetEditorComponent } from './cardset-editor/cardset-editor.component';
import { LoginComponent } from './login/login.component';
import { BasicAuthInterceptor } from './services/auth/basic-auth.interceptor';
import { AuthGuard } from './guards/auth.guard';
import { CardsetShareComponent } from './cardset-share/cardset-share.component';
import { RegisterComponent } from './register/register.component';
import { ErrorViewComponent } from './error-view/error-view.component';
import { KatexParagraphComponent } from './katex-paragraph/katex-paragraph.component';
import { CardsetOverviewComponent } from './cardset-overview/cardset-overview.component';

import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [
    AppComponent,
    CardViewerComponent,
    CardsetSelectorComponent,
    CardsetEditorComponent,
    LoginComponent,
    CardsetShareComponent,
    RegisterComponent,
    ErrorViewComponent,
    KatexParagraphComponent,
    CardsetOverviewComponent
  ],
  imports: [
    BrowserModule,
    HammerModule,
    KatexModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatMenuModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptor, multi: true },
    { provide: HAMMER_GESTURE_CONFIG, useClass: HammerGestureConfig },
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
