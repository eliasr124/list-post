import { Component, Input } from '@angular/core';
import { IUser } from '../models/list-post.model';
import { ListService } from '../services/list.service';

@Component({
  selector: 'app-list-table-item',
  templateUrl: './list-table-item.component.html',
  styleUrls: ['./list-table-item.component.css']
})
export class UserTableItemComponent {
  @Input() user!: IUser;

  public editUser = false;

  constructor(private listService: ListService) {}

  deleteUser(id: string) {
    this.listService.deleteList(id);
  }

  changeUser(): void {
    const { _id, ...user } = this.user;
    this.listService.updateList(_id, user);
  }
}
