import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit{

  notes : any;
  writeNote : boolean = false;
  isNoteSelected = {flag : false, selectedIndex : null};
  description : string;
  searchedTerm : any;
  timestamp : any;
  toolbarConfig = [ 'bold', 'italics', 'underline', 'strikeThrough', 'subscript', 'superscript', 'fontName'];

  mobileQuery: MediaQueryList;

  fillerNav = [ 'item1', 'item2']

  currentDateTime = new Date();


  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }



  ngOnInit() {
    var self = this;
    console.log(this.mobileQuery);
    console.log(this.mobileQuery.matches);
    this.notes = JSON.parse(localStorage.getItem("notes")) || [];
    console.log(this.notes);
    if(!this.notes){
      this.notes = []
    }
    setInterval(function(){ self.currentDateTime = new Date(); }, 1000);
  }

  addNewNote(){
    this.writeNote = true;
    this.description = "";
    this.isNoteSelected.flag = false;
  }

  saveNote(){
    if(!this.description){
      alert("Note can not be empty.");
    }
    else{
      if(this.isNoteSelected.flag == true){
        this.notes[this.isNoteSelected.selectedIndex]['description'] = this.description;
        this.notes[this.isNoteSelected.selectedIndex]['timestamp'] = this.currentDateTime;
        localStorage.setItem("notes", JSON.stringify(this.notes));
        this.isNoteSelected.flag = false;
      }
      else{
      this.notes.push({"description" : this.description, "timestamp" : this.currentDateTime});
      console.log(this.notes);
      localStorage.setItem("notes", JSON.stringify(this.notes));
      }
      this.description = "";
      this.writeNote = false;
    }
  }

  deleteNote(){
    if(this.isNoteSelected.flag == true){
      this.notes.splice(this.isNoteSelected.selectedIndex, 1);
      localStorage.setItem("notes", JSON.stringify(this.notes));
      this.isNoteSelected.flag = false;
      this.writeNote = false;
      this.description = "";
    }
    else{
      alert("Please select the note to be deleted.");
    }

  }

  selectedNote(i){
    this.writeNote = true;
    this.description = this.notes[i]['description'];
    this.isNoteSelected.flag = true;
    this.isNoteSelected.selectedIndex = i;
  }

  searchFn(){
    var allNotes = JSON.parse(localStorage.getItem("notes")) || [];
    if(this.searchedTerm){
      this.notes = allNotes.filter(note => note.description.toLowerCase().includes(this.searchedTerm.toLowerCase()));
      console.log(this.notes);
    }
    else{
      this.notes = allNotes;
    }
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

}
