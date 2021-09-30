import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoginComponent } from "./login/login.component";
@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  currentUser=null;
 // isAdmin=false;
  constructor(private _router:Router, private data:LoginComponent ) { }

  get isLoggedIn(): boolean {
    return !! this.currentUser;
  }

 login(username: string, password:string)
 {
   localStorage.setItem(this.data.userId,this.data.password);
    // if(username==="admin")
    // {
    //   this.currentUser={
    //     id:"admin@gmail.com",
    //     uname:"admin",
    //     isAdmin:true
    //   };
    //   return;
    // }
    // this.currentUser={
    //   id: username+"@gmail.com",
    //   uname:username,
    //   isAdmin:false
    // };
 }
 logout(){
   this.currentUser=null;
   localStorage.clear();
   this._router.navigate(['/']);
 }
}
