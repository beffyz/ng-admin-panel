import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { User } from '../../models/user.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-contact',
  templateUrl: './admin-contact.component.html',
  styleUrls: ['./admin-contact.component.scss'],
})
export class AdminContactComponent implements OnInit {
  id!: number;
  user!: Observable<User>;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    document.title = 'Dashboard Panel | User';
    this.user = this.activatedRoute.data.pipe(map((data) => data?.['user']));
  }
}
