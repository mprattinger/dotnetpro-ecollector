import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { provideAuth } from 'angular2-jwt';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CollectComponent } from './collect/collect.component';
import { SearchComponent } from './search/search.component';
import { KnowledgeTimelineComponent } from './collect/shared/knowledge-timeline/knowledge-timeline.component';
import { KnowledgeCollectorComponent } from './collect/shared/knowledge-collector/knowledge-collector.component';
import { SearchFormComponent } from './search/shared/search-form/search-form.component';
import { SearchTimelineComponent } from './search/shared/search-timeline/search-timeline.component';
import { TimelineItemComponent } from './shared/timeline-item/timeline-item.component';
import { LoginComponent } from './login/login.component';

import { SearchService } from './search/shared/search.service';
import { CollectService } from './collect/shared/collect.service';
import { UploadService } from './collect/shared/upload.service';
import { AccountService } from './login/account.service';
import { AccountManagerService } from './login/account-manager.service';

@NgModule({
  declarations: [
    AppComponent,
    CollectComponent,
    SearchComponent,
    KnowledgeTimelineComponent,
    KnowledgeCollectorComponent,
    SearchFormComponent,
    SearchTimelineComponent,
    TimelineItemComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    CollectService,
    SearchService,
    UploadService,
    AccountService,
    AccountManagerService,
    provideAuth({
      tokenName: 'jwt',
      tokenGetter: () => localStorage.getItem('jwt'),
      globalHeaders: [{ 'Content-Type': 'application/json' }],
      noJwtError: true,
      noTokenScheme: true
    })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
