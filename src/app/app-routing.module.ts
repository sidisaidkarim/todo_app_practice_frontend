import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomepageComponent } from './core/pages/welcomepage/welcomepage.component';
import { TasklistComponent } from './core/pages/tasklist/tasklist.component';

const routes: Routes = [
  { path: '', component: WelcomepageComponent },
  { path: 'tasks', component: TasklistComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
