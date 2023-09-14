import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteListComponent} from './note-list.component';

describe('CourseListComponent', () => {
  let component: NoteListComponent;
  let fixture: ComponentFixture<NoteListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NoteListComponent]
    });
    fixture = TestBed.createComponent(NoteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
