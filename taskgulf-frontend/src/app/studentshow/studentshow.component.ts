import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { inherits } from 'util';
import { StudentService } from "./student.service";
import { BasicForm } from './studentFormClass';
@Component({
  selector: 'app-studentshow',
  templateUrl: './studentshow.component.html',
  styleUrls: ['./studentshow.component.css']
})
export class StudentshowComponent implements OnInit {
  arrStudentList:BasicForm[]=[];
  taskid;

  constructor(private data: StudentService,private _actroute:ActivatedRoute, private _router: Router) { }

  ngOnInit(): void {
  this.init();
  }

  init()
  {
    this.data.getStudentForm().subscribe((x) => {
      this.arrStudentList = x;
    });
  }

  onDelete(item) {
    this.data.deleteStudentForm(item.id).subscribe((x: any) => {
        this.arrStudentList.splice(this.arrStudentList.indexOf(item.id), 1);
    });
}

  onEdit(item:BasicForm)
  {
    this._router.navigate(['/edit', item.id]);
    console.log(item.id);
  }



}

