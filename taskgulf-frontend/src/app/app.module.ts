import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { arrRouting } from "./app.routing";
import { NavbarComponent } from './navbar/navbar.component';
import { StudentshowComponent } from './studentshow/studentshow.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from "@angular/forms";
import { UseraddComponent } from "./studentshow/useradd/useradd.component";
import { EditDataComponent } from "./studentshow/editdata/editdata.component";
import { LoginComponent} from "./login/login.component";
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    StudentshowComponent,
    UseraddComponent,
    EditDataComponent,
    LoginComponent,
    PagenotfoundComponent
  ],
  imports: [
    arrRouting,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
