import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NotFoundComponent} from "./shared/components/not-found/not-found.component";

const routes: Routes = [{
  path: 'todo',
  loadChildren: () => import("./modules/todo/todo.module").then(module => module.TodoModule)
}, {
  path: 'not-found',
  pathMatch: 'full',
  component: NotFoundComponent
}, {
  path: '**',
  pathMatch: 'full',
  redirectTo: 'not-found'
},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
