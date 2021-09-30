import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from "../student.service";
import { BasicForm } from '../studentFormClass';
@Component({
  selector: 'app-editdata',
  templateUrl: './editdata.component.html',
  styleUrls: ['./editdata.component.css']
})
export class EditDataComponent implements OnInit {
  editForm:FormGroup;
 taskid;
  constructor(private data:StudentService, private router:Router, private _actroute:ActivatedRoute) { }

  ngOnInit(): void {
    this.editForm= new FormGroup ({
      id: new  FormControl(),
      name: new  FormControl(),
      gender: new  FormControl(),
      age: new  FormControl(),
      mobileNo: new  FormControl(),
      location: new  FormControl()

    });

    this.taskid=this._actroute.snapshot.params['id'];
    console.log(this.taskid);
    this.data.getStudentFormById(this.taskid).subscribe((x:BasicForm[]) =>
      {
         this.editForm.patchValue({
          id:x[0].id,
          name:x[0].name,
          gender:x[0].gender,
          age: x[0].age,
          mobileNo: x[0].mobileNo,
          location:x[0].location
        });
       }
     );


  }

  EditFormPopUp()
    {
      this.data.editStudentForm(this.editForm.value).subscribe((x) => {
        alert("Student Details Edited Successfully!...");
        this.router.navigate(['/student']);
        });
    }
    onclear()
    {
      this.router.navigate(['/student']);
    }


}
