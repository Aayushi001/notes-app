import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import{ FormsModule} from '@angular/forms';
import { NgxEditorModule } from 'ngx-editor';
import { NgHighlightModule } from 'ngx-text-highlight';
import { NotesComponent } from './notes/notes.component';

// import ngx-bootstrap and font-awesome for editor to work.

//material import
import {MaterialModule} from './material/material.module';

const routes: Routes = [
  { path: '', component: NotesComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NotesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    NgHighlightModule,
    NgxEditorModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
