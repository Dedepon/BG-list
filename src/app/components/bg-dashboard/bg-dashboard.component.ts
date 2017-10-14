import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoggerService } from '../../services/logger/logger.service';

@Component({
  selector: 'bgl-bg-dashboard',
  templateUrl: './bg-dashboard.component.html',
  styleUrls: ['./bg-dashboard.component.css']
})
export class BgDashboardComponent implements OnInit {
  colId: String;
  bgId: String;
  listBgId: String;

  constructor(private router: Router) { }

  ngOnInit() { }

  fetchCollection(): void {
    this.router.navigate(['/collection'], { queryParams: { colId: this.colId } })
      .catch(LoggerService.error);
  }

  fetchFullTree(): void {
    this.router.navigate(['/tree'], { queryParams: { bgId: this.bgId } })
      .catch(LoggerService.error);
  }

  fetchList(): void {
    if (this.listBgId.indexOf(',') === -1) {
      this.router.navigate(['/details', this.listBgId])
        .catch(LoggerService.error);
    } else {
      this.router.navigate(['/list'], { queryParams: { listBgId: this.listBgId } })
        .catch(LoggerService.error);
    }
  }
}
