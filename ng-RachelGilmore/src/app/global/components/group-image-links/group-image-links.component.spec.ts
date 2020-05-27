import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupImageLinksComponent } from './group-image-links.component';

describe('GroupImageLinksComponent', () => {
  let component: GroupImageLinksComponent;
  let fixture: ComponentFixture<GroupImageLinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupImageLinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupImageLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
