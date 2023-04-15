import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SummaryPipe } from './shared/components/pipes/summary.pipe';
import { FileSizePipe } from './shared/components/pipes/file-size.pipe';
import { FormsModule } from '@angular/forms';
import { CricFilterPipe } from './cric-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SummaryPipe,
    FileSizePipe,
    CricFilterPipe
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
