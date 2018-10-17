import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RequestHandlerInterceptor } from './Interceptor/RequestHandlerInterceptor';
import { DndListModule } from '@fjsc/ng2-dnd-list';
import { DataService } from './service/data.service';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    DndListModule
  ],
  providers: [DataService, {
    provide: HTTP_INTERCEPTORS,
    useClass: RequestHandlerInterceptor, multi: true,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
