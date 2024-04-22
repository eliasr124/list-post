import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ListService } from '../services/list.service';

@Component({
  selector: 'app-add-list',
  templateUrl: './add-list.component.html',
  styleUrls: ['./add-list.component.css']
})
export class AddListComponent {

  constructor(private fb: FormBuilder, private listService: ListService) {}

  public addForm = this.fb.group({
    title: ['Teste', Validators.required],
    body: ['Teste123', Validators.required],
  });

  onSubmit(list: any): void {
    if (this.addForm.valid) {
      this.listService.createList(list).subscribe((res) => {
        this.addForm.reset();
      });
      console.log('User >>>>>', list);
      
    }
  }

}
