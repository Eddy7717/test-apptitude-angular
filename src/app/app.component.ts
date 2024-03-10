import { Component, OnInit } from '@angular/core';
import { UpdateService } from './services/update.service';
import { UpdatePackage } from './models/update-package.interface';
import { RootServiceModule } from './module/root-service.module';
import { CommonModule } from '@angular/common';
import {
  Router,
  NavigationExtras,
  ActivatedRoute,
  Params,
} from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RootServiceModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'test-apptitude-angular';

  updates: UpdatePackage[];
  selectedVersion: UpdatePackage | null;

  constructor(
    private updateService: UpdateService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.updates = [];
    this.selectedVersion = null;
  }

  ngOnInit(): void {
    this.updateService.getUpdates().subscribe((updates) => {
      this.updates = updates;
      this.route.queryParams.subscribe((params: Params) => {
        const versionParam = params['version'];
        if (versionParam) {
          this.selectedVersion =
            this.updates.find((update) => update.version === versionParam) ||
            null;
        } else {
          this.selectedVersion = updates[0];
        }
      });
    });
  }
  selectVersion(update: UpdatePackage): void {
    if (update !== null) {
      this.selectedVersion = update;
      const navigationExtras: NavigationExtras = {
        queryParams: { version: update.version },
      };
      this.router.navigate([], navigationExtras);
    }
  }
}
