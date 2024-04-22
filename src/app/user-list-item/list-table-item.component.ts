import { Component, Input } from '@angular/core';
import { ListService } from '../services/list.service';
import { IListPost } from '../models/list-post.model';

@Component({
  selector: 'app-list-table-item',
  templateUrl: './list-table-item.component.html',
  styleUrls: ['./list-table-item.component.css']
})
export class UserTableItemComponent {
  @Input() user!: IListPost;

  public editUser = false;

  constructor(private listService: ListService) {}

  deleteUser(id: string) {
    this.listService.deleteList(id);
  }

  changeUser(): void {
    const { id, ...user } = this.user;
    this.listService.updateList(id, this.user);
  }
}
