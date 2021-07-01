import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './views/index/index.component';
import { ChooseStockComponent } from './views/choose-stock/choose-stock.component';
import { NewStockComponent } from './views/new-stock/new-stock.component';
import { RecommendComponent } from './views/recommend/recommend.component';
import { TimePipe } from './pipes/time.pipe';
import { DayinfoComponent } from './views/dayinfo/dayinfo.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    ChooseStockComponent,
    NewStockComponent,
    RecommendComponent,
    TimePipe,
    DayinfoComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
