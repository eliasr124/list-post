import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IListPost, IUser } from '../models/list-post.model';
import { BehaviorSubject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  private baseUrl: string = "https://jsonplaceholder.typicode.com/posts";
  public users$ = new BehaviorSubject<IUser[]>([]);


  constructor(private http: HttpClient) { }

  getList() {
    this.http.get<IUser[]>(this.baseUrl).subscribe((res) => {
      this.users$.next(res);
    });
  }

  createList(list: IListPost) {
    return this.http.post<IListPost>(this.baseUrl, list).pipe(
      tap(() => {
        this.getList();
      })
    );
  }

  updateList(id: string, list: IListPost) {
    return this.http
        .put<IListPost>(`${this.baseUrl}/${id}`, list)
        .subscribe((res) => {       
          this.getList();
    });
  }

  deleteList(id: string) {
    return this.http.delete('/' + id).subscribe((res) => {
      this.getList();
    });
  }
}
