import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './global/components/header/header.component';
import { FooterComponent } from './global/components/footer/footer.component';
import { HomeComponent } from './home/home/home.component';
import { GroupImageLinksComponent } from './global/components/group-image-links/group-image-links.component';
import { SocialMediaLinksComponent } from './global/components/social-media-links/social-media-links.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    GroupImageLinksComponent,
    SocialMediaLinksComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
