import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';


import { ContactListComponent } from "./contact-list/contact-list.component";
import { ContactFormComponent } from "./contact-form/contact-form.component";
import { NotFoundComponent } from "./not-found/not-found.component";


const appRoutes: Routes = [
    { path: 'contacts', component: ContactListComponent },
    { path: 'contact/new', component: ContactFormComponent },
    { path: 'contact/:id/edit', component: ContactFormComponent },
    { path: '', redirectTo: 'contacts', pathMatch: 'full' },
    { path: '**', component: NotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}