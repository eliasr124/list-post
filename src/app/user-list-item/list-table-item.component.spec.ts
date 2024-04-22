import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTableItemComponent } from './list-table-item.component';

describe('UserTableItemComponent', () => {
  let component: UserTableItemComponent;
  let fixture: ComponentFixture<UserTableItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserTableItemComponent]
    });
    fixture = TestBed.createComponent(UserTableItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
