import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import {HttpClientModule} from '@angular/common/http';

const app_routes: Routes = [
  { path: 'wishlist' , component: WishlistComponent },
  { path: 'search' , component: CardComponent }
];
@NgModule({
  declarations: [AppComponent, CardComponent, WishlistComponent],
  imports: [BrowserModule, RouterModule.forRoot(app_routes), HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
