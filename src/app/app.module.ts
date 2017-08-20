import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PostsComponent } from './posts/posts.component';
import { UsersComponent } from './users/users.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormComponent } from './form/form.component';

import { mainRouting } from './app.routing';
import { UserService } from './shared/data.service';
import { ConfigService } from './shared/config.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PostsComponent,
    UsersComponent,
    HomeComponent,
    NotFoundComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    mainRouting,
    HttpModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    UserService,
    ConfigService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
