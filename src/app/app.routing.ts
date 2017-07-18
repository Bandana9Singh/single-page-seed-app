import { Router, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PostsComponent } from './posts/posts.component';
import { UsersComponent } from './users/users.component';
import { FormComponent } from './form/form.component';

export const mainRouting = RouterModule.forRoot([
    { path: '', component: HomeComponent },
    { path: 'posts', component: PostsComponent },
    { path: 'users', component: UsersComponent },
    { path: 'users/new', component: FormComponent },
    { path: 'users/:id', component: FormComponent }
]);