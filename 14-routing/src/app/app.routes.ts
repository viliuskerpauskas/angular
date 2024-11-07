import { Routes } from '@angular/router';
import { NoTaskComponent } from './tasks/no-task/no-task.component';
import { TasksComponent } from './tasks/tasks.component';
import {
  resolveTitle,
  resolveUserName,
  UserTasksComponent,
} from './users/user-tasks/user-tasks.component';
import { NewTaskComponent } from './tasks/new-task/new-task.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { routes as userRoutes } from './users/users.routes';

export const routes: Routes = [
  {
    path: '', // <your-domain>
    component: NoTaskComponent,
    title: 'No task selected',
  },
  {
    path: 'users/:userId', // <your-domain>/users/<user-id>
    component: UserTasksComponent,
    children: userRoutes,
    data: {
      message: 'Hello!',
    },
    resolve: {
      userName: resolveUserName,
    },
    title: resolveTitle,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
