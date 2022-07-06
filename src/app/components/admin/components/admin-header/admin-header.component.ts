import { Component, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  ResolveEnd,
  ResolveStart,
  Router,
} from '@angular/router';
import { AuthenticationService } from '../../../../services/authentication.service';
import { filter, mapTo, merge, Observable } from 'rxjs';
import { User } from '../../models/user.model';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.scss'],
})
export class AdminHeaderComponent implements OnInit {
  private showLoader?: Observable<boolean>;
  private hideLoader?: Observable<boolean>;

  isLoading?: Observable<boolean>;

  users?: Observable<User[]>;

  constructor(
    private adminService: AdminService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private authenticationService: AuthenticationService
  ) {}

  ngOnInit(): void {
    this.showLoader = this.router.events.pipe(
      filter((event) => event instanceof ResolveEnd),
      mapTo(false)
    );
    this.hideLoader = this.router.events.pipe(
      filter((event) => event instanceof ResolveStart),
      mapTo(true)
    );

    this.isLoading = merge(this.showLoader, this.hideLoader);
  }

  logout(): void {
    this.authenticationService.logout();
  }
}
