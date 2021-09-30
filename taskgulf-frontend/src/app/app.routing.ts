import { Routes, RouterModule } from "@angular/router";
import { PagenotfoundComponent } from "./pagenotfound/pagenotfound.component";
import { UserguardService } from "./userguard.service";
import { StudentshowComponent } from "./studentshow/studentshow.component";
import { UseraddComponent } from "./studentshow/useradd/useradd.component";
import { EditDataComponent } from "./studentshow/editdata/editdata.component";
import { LoginComponent } from "./login/login.component";
const arr : Routes=[
{path:'',component:LoginComponent},
{path:'student', component: StudentshowComponent },
{path:'add', component: UseraddComponent },
{path:'edit/:id', component: EditDataComponent },
{path:'**',redirectTo: 'PagenotfoundComponent' },

];
export const arrRouting = RouterModule.forRoot(arr);
