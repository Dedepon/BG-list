import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'bgl-bg-tree',
  templateUrl: './bg-tree.component.html',
  styleUrls: ['./bg-tree.component.css']
})
export class BgTreeComponent implements OnInit, OnDestroy {
  bgId: String;
  private sub: Subscription;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route
      .queryParams
      .subscribe(params => {
        this.bgId = params['colId'];
        if (this.bgId) { this.fetchFullTree(); }
      });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  fetchFullTree(): void {
  }
}
