import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'bgl-bg-collection',
  templateUrl: './bg-collection.component.html',
  styleUrls: ['./bg-collection.component.css']
})
export class BgCollectionComponent implements OnInit, OnDestroy {
  colId: String;
  private sub: Subscription;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route
      .queryParams
      .subscribe(params => {
        this.colId = params['colId'];
        if (this.colId) { this.fetchCollection(); }
      });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  fetchCollection(): void {
  }

}
