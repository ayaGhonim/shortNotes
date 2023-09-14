import { Component } from '@angular/core';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css'],
})
export class NoteListComponent {
  notes: string[] = [];
  newNote: string = '';

  addNote() {
    if (this.newNote.trim()) {
      this.notes.push(this.newNote);
      this.newNote = '';
    }
}
deleteNote(note: string) {
  const index = this.notes.indexOf(note);
  if (index !== -1) {
    this.notes.splice(index, 1);
  }
}
}