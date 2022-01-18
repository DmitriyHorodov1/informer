import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPostPanelComponent } from './add-post-panel.component';

describe('AddPostPanelComponent', () => {
  let component: AddPostPanelComponent;
  let fixture: ComponentFixture<AddPostPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPostPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPostPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
