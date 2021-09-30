import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BasicForm} from "./studentFormClass"

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  url1:string= "http://localhost:3000/form/"

  constructor(private data:HttpClient) { }

    getStudentForm()
    {
      return this.data.get<BasicForm[]>(this.url1);
    }
    getStudentFormById(id)
    {
      return this.data.get(this.url1+id);
    }

    addStudentForm(items:BasicForm)
    {
      let head = new HttpHeaders().set('Content-Type','application/json');
      let body=JSON.stringify(items);
      return this.data.post(this.url1, body, {headers:head}  );
    }

    deleteStudentForm(id)
    {
      let head = new HttpHeaders().set('Content-Type','application/json');
      return this.data.delete(this.url1+id, {headers:head} );
    }

    editStudentForm(items:BasicForm)
    {
      let head = new HttpHeaders().set('Content-Type','application/json');
      let body =JSON.stringify(items);
      return this.data.put(this.url1+items.id,body, {headers:head} );
    }

}
