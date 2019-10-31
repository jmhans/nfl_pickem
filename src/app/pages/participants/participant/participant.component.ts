import { Component, OnInit, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AuthService } from './../../../auth/auth.service';
import { ApiService } from './../../../core/services/api.service';
import { UtilsService } from './../../../core/services/utils.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ParticipantModel } from './../../../core/models/participant';

@Component({
  selector: 'app-participant',
  templateUrl: './participant.component.html',
  styleUrls: ['./participant.component.scss']
})
export class ParticipantComponent implements OnInit, OnDestroy {

  pageTitle: string;
  id: string;
  loggedInSub: Subscription;
  routeSub: Subscription;
  tabSub: Subscription;
  participantSub: Subscription;
  participant: ParticipantModel;
  loading: boolean;
  error: boolean;
  tab: string;

  constructor(
    private route: ActivatedRoute,
    public auth: AuthService,
    private api: ApiService,
    public utils: UtilsService,
    private title: Title
  ) { }

  ngOnInit() {
    
    this._routeSubs();
    
//     this.loggedInSub = this.auth.loggedIn$.subscribe(
//       loggedIn => {
//         this.loading = true;
//         if (loggedIn) {
//           this._routeSubs();
//         }
//       }
//     );
  }

  private _routeSubs() {
    // Set event ID from route params and subscribe
    this.routeSub = this.route.params
      .subscribe(params => {
        this.id = params['id'];
        this._getParticipant(); 
      });

    // Subscribe to query params to watch for tab changes
    this.tabSub = this.route.queryParams
      .subscribe(queryParams => {
        this.tab = queryParams['tab'] || 'details';
      });
  }

  private _getParticipant() {
    this.loading = true;
    // GET event by ID
    this.participantSub = this.api
      .getDatabyId$('participants', this.id)
      .subscribe(
        res => {
          this.participant = res;
          this._setPageTitle(this.participant.nickname);
          this.loading = false;
        },
        err => {
          console.error(err);
          this.loading = false;
          this.error = true;
          this._setPageTitle('Error');
        }
      );
  }

  private _setPageTitle(title: string) {
    this.pageTitle = title;
    this.title.setTitle(title);
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
    this.tabSub.unsubscribe();
    this.participantSub.unsubscribe();
  }

}


