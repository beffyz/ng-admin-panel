import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { map, Observable } from 'rxjs';
import { User } from '../../models/user.model';
import {
  ActivatedRoute,
  Router,
} from '@angular/router';

@Component({
  selector: 'app-admin-contacts',
  templateUrl: './admin-contacts.component.html',
  styleUrls: ['./admin-contacts.component.scss'],
})
export class AdminContactsComponent implements OnInit {
  users?: Observable<User[]>;

  constructor(
    private adminService: AdminService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    document.title = 'Dashboard Panel | Users'
    this.users = this.activatedRoute.data.pipe(map((data) => data?.['users']));
  }
}
