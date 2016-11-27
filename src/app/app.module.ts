
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './menus/header.component';
import { FooterComponent } from './menus/footer.component';

//import { AppRoutingModule } from './app.routing';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        //AppRoutingModule,
    ],
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
    ],
    providers: [

    ],
    bootstrap: [
        AppComponent,
        HeaderComponent,
        FooterComponent
    ],
})
export class AppModule { }
