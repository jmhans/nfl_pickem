import { Component, OnInit, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AuthService } from './../../auth/auth.service';
import { ApiService } from './../../core/services/api.service';
import { UtilsService } from './../../core/services/utils.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { ParticipantModel } from './../../core/models/participant';

import { FilterSortService } from './../../core/services/filter-sort.service';
import {FormControl} from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-participants',
  templateUrl: './participants.component.html',
  styleUrls: ['./participants.component.scss']
})
export class ParticipantsComponent implements OnInit, OnDestroy {

  pageTitle = 'Participants';
  participantListSub: Subscription;
  participantList: ParticipantModel[];
  filteredParticipants: ParticipantModel[];
  loading: boolean;
  error: boolean;
  query: string = '';
  
  constructor(
    private title: Title,
    public utils: UtilsService,
    private api: ApiService,
    public fs: FilterSortService, 
    private datePipe: DatePipe
  ) { }

  ngOnInit() {
    this.title.setTitle(this.pageTitle);
    this._getParticipantList();
    
  }
  

  private _getParticipantList() {
    this.loading = true;
    // Get future, public events
    this.participantListSub = this.api
      .getData$('participants')
      .subscribe(
        res => {
          this.participantList = res;
          this.filteredParticipants = res;
          this.loading = false;
        },
        err => {
          console.error(err);
          this.loading = false;
          this.error = true;
        }
      );
  }

  searchParticipants() {
    this.filteredParticipants = this.fs.search(this.participantList, this.query, '_id', 'mediumDate');
    
  }

  resetQuery() {
    this.query = '';
    this.filteredParticipants = this.participantList;
  }

  ngOnDestroy() {
    this.participantListSub.unsubscribe();
  }
  
  hasProp(o, name) {
    return o.hasOwnProperty(name);
  }

}



