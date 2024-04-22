import { Component, OnInit } from '@angular/core';
import { ListService } from '../services/list.service';
import { BehaviorSubject } from 'rxjs';
import { IUser } from '../models/list-post.model';

@Component({
  selector: 'app-list-table',
  templateUrl: './list-table.component.html',
  styleUrls: ['./list-table.component.css']
})
export class ListTableComponent implements OnInit {
  public users!: BehaviorSubject<IUser[]>;

  constructor(private listPost: ListService) {

  }
  ngOnInit(): void {
    this.listPost.getList();
    this.users = this.listPost.users$;
  }

  

}
