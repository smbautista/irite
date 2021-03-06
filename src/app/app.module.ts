import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms'
import { MDBBootstrapModule } from 'angular-bootstrap-md'
import { AngularEditorModule } from '@kolkov/angular-editor';
// import { MDBBootstrapModulesPro, MDB_DATE_OPTIONS } from 'ng-uikit-pro-standard';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/Auth/login/login.component';
import { IndexComponent } from './Components/public/index/index.component';
import { RegisterComponent } from './Components/Auth/register/register.component';
import { HomeComponent } from './Components/public/home/home.component';
import { LibraryComponent } from './Components/public/library/library.component';
import { AdminLoginComponent } from './Components/Auth/admin-login/admin-login.component';
import { HeaderComponent } from './Components/Navigation/header/header.component';
import { FooterComponent } from './Components/Navigation/footer/footer.component';
import { PublishedComponent } from './Components/public/published/published.component';
import { CreateStoryComponent } from './Components/public/create-story/create-story.component';
import { CoverBookComponent } from './Components/public/cover-book/cover-book.component';
  // import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    IndexComponent,
    RegisterComponent,
    HomeComponent,
    LibraryComponent,
    AdminLoginComponent,
    HeaderComponent,
    FooterComponent,
    PublishedComponent,
    CreateStoryComponent,
    CoverBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule,
    AngularEditorModule
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [
    // {provide: MDB_DATE_OPTIONS,}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
