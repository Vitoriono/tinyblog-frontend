import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { RegComponent } from './reg/reg.component';
import { AuthComponent } from './auth/auth.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ApiService } from './api.service';
import { HttpClientModule } from '@angular/common/http';
import { QuillModule } from 'ngx-quill';
import { PostComponent } from './post/post.component';
import { SortingPipe } from './sorting.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    RegComponent,
    AuthComponent,
    DashboardComponent,
    PostComponent,
    SortingPipe,
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    QuillModule.forRoot(),
  ],

  providers: [ApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
