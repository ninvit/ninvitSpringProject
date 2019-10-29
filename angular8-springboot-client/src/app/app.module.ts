import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateDiaComponent } from './create-dia/create-dia.component';
import { DiaDetailsComponent } from './dia-details/dia-details.component';
import { DiaListComponent } from './dia-list/dia-list.component';
import { HttpClientModule } from '@angular/common/http';
import { UpdateDiaComponent } from './update-dia/update-dia.component';
@NgModule({
  declarations: [
    AppComponent,
    CreateDiaComponent,
    DiaDetailsComponent,
    DiaListComponent,
    UpdateDiaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
