import { Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { CreateUserComponent } from './modules/create-user/create-user.component';

export const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'create', component: CreateUserComponent },
];
