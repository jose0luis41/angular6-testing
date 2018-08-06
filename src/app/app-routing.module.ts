import { NgModule } from "../../node_modules/@angular/core";
import { RouterModule, Routes } from "../../node_modules/@angular/router";
import { TabsComponent } from "./toolbar/tabs/tabs.component";
import { PeopleTableComponent } from "./toolbar/people-table/people-table.component";

const routes: Routes = [
        {path:'', redirectTo:'/register-form', pathMatch: 'full'},
        {path:'listpeople', component: PeopleTableComponent},
        {path:'register-form', component: TabsComponent}
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{
}

export const routingComponents = [PeopleTableComponent, TabsComponent];