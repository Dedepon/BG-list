import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'bgl-bg-list',
  templateUrl: './bg-list.component.html',
  styleUrls: ['./bg-list.component.css']
})
export class BgListComponent implements OnInit, OnDestroy {
  listBgId: string;
  private sub: Subscription;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route
      .queryParams
      .subscribe(params => {
        this.listBgId = params['colId'];
        if (this.listBgId) { this.fetchList(); }
      });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  fetchList(): void {
  }
}
