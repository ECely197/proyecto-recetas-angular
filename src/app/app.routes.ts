import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DetailComponent } from './pages/detail/detail.component';
import { FormComponent } from './pages/form/form.component';
export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: `detail/:id`, component: DetailComponent },
  { path: 'form', component: FormComponent },
];
