import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Layout/header/header.component';
import { FooterComponent } from './Layout/footer/footer.component';
import { HomeComponent } from './Layout/home/home.component';
import { NotFoundComponent } from './Layout/not-found/not-found.component';
import { ListEventsComponent } from './Layout/list-events/list-events.component';
import { FormsModule } from '@angular/forms';
import { CardComponent } from './card/card.component';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    NotFoundComponent,
    ListEventsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SharedModule,
    CardComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
