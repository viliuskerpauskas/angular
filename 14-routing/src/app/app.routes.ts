import { CanMatchFn, RedirectCommand, Router, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { NoTaskComponent } from './tasks/no-task/no-task.component';
import {
  resolveTitle,
  resolveUserName,
  UserTasksComponent,
} from './users/user-tasks/user-tasks.component';
import { routes as userRoutes } from './users/users.routes';
import { inject } from '@angular/core';

const dummyCanMatch: CanMatchFn = (route, segments) => {
  const router = inject(Router);
  const shouldGetAccess = Math.random();
  if (shouldGetAccess < 1) {
    return true;
  }
  return new RedirectCommand(router.parseUrl('/unauthorized'));
};

export const routes: Routes = [
  {
    path: '', // <your-domain>
    component: NoTaskComponent,
    title: 'No task selected',
  },
  {
    path: 'users/:userId', // <your-domain>/users/<user-id>
    component: UserTasksComponent,
    canMatch: [dummyCanMatch],
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
