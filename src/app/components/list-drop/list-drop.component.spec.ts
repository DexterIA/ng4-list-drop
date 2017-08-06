import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDropComponent } from './list-drop.component';

describe('ListDropComponent', () => {
  let component: ListDropComponent;
  let fixture: ComponentFixture<ListDropComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListDropComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
