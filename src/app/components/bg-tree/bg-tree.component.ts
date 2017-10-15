import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute } from '@angular/router';

import { BgService } from '../../services/bg/bg.service';
import { Bg } from '../../model/bg';

@Component({
  selector: 'bgl-bg-tree',
  templateUrl: './bg-tree.component.html',
  styleUrls: ['./bg-tree.component.css'],
  providers: [
    BgService
  ]
})
export class BgTreeComponent implements OnInit, OnDestroy {
  bgId: string;
  bg: [string, Bg][];
  private sub: Subscription;
  constructor(private route: ActivatedRoute,
              private bgService: BgService) { }

  ngOnInit() {
    this.sub = this.route
      .queryParams
      .subscribe(params => {
        this.bgId = params['bgId'];
        if (this.bgId) { this.fetchFullTree(); }
      });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  fetchFullTree(): void {
    this.bgService.getBgTree(this.bgId)
      .then(data => {
        this.bg = Array.from(data);
      });
  }
}
