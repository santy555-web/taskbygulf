import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentService } from "../student.service";
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-useradd',
  templateUrl: './useradd.component.html',
  styleUrls: ['./useradd.component.css']
})
export class UseraddComponent implements OnInit {
  addForm:FormGroup;

  constructor(private data:StudentService, private router:Router) { }

  ngOnInit(): void {
    this.addForm= new FormGroup ({
      id: new  FormControl(),
      name: new  FormControl(),
      gender: new  FormControl(),
      age: new  FormControl(),
      mobileNo: new  FormControl(),
      location: new  FormControl()

    });
  }


  addFormPopUp()
  {
    this.data.addStudentForm(this.addForm.value).subscribe((x)=>
    {
      alert("Task Added Successfully!...");
      this.router.navigate(['/student']);

    });
  }

  onclear()
  {
    this.router.navigate(['/student']);
  }


}
