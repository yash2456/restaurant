import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';

//material
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';
import {MatGridListModule} from '@angular/material/grid-list'
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ReactiveFormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {MatSliderModule} from '@angular/material/slider'


import { FormsModule } from '@angular/forms'; 
import { DishDetailsComponent } from './dishDetails/dish-details/dish-details.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';
import { HeaderComponent } from './header/header/header.component';
import { FooterComponent } from './footer/footer/footer.component';
import { DishService  } from '../app/service/dish.service';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import{AppRoutingModule} from '../app/app-routing/app-routing.module';
import {LoginComponent} from '../app/login/login.component';
import { LeaderService } from './service/leader.service';
import { PromotionService } from './service/promotion.service';
import { Dishdeta11ilsComponent } from './assignment1/dishdetails/dishdeta11ils.component';
import{ Men1uComponent } from './assignment1/menu/men1u.component';
import { HttpClientModule } from '@angular/common/http';
import { baseURL } from './shared/baseurl';

import { ProcessHTTPMsgService } from './service/process-httpmsg.service';
import { HighlightDirective } from './directives/hihlight.directive';

@NgModule({
  declarations: [
    Men1uComponent,
    AppComponent,
    MenuComponent,
    DishDetailsComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent,
    Dishdeta11ilsComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatListModule,
    MatGridListModule,
    MatFormFieldModule,
    MatSliderModule,
    MatCardModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatDialogModule,
    FormsModule,
    MatSelectModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    HttpClientModule,

  ],

  providers: [
    DishService,
    LeaderService,
    PromotionService,
    ProcessHTTPMsgService,
    {provide: 'BaseURL', useValue: baseURL}
  ],
  entryComponents: [
    LoginComponent
],
  bootstrap: [AppComponent]
})
export class AppModule { }
