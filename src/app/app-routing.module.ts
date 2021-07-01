import { Interpolation } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from "./views/index/index.component";
import { NewStockComponent } from "./views/new-stock/new-stock.component";
import { ChooseStockComponent } from "./views/choose-stock/choose-stock.component";
import { RecommendComponent } from "./views/recommend/recommend.component";
import { DayinfoComponent } from "./views/dayinfo/dayinfo.component";

const routes: Routes = [
  {
    path: 'index', component: IndexComponent,
    children: [
      { path: 'recommend', component: RecommendComponent },
      { path: 'dayinfo/:key', component: DayinfoComponent }
    ]
  },
  { path: 'newstock', component: NewStockComponent, pathMatch: 'full' },
  { path: 'choosestock', component: ChooseStockComponent, pathMatch: 'full' },
  { path: '', redirectTo: '/index/recommend', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
