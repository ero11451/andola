import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: '',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/home/home.module').then(m => m.HomePageModule)
          }
        ]
      },
      {
        path: 'coures',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/course/course.module').then(m => m.CoursePageModule)
          }
        ]
      },
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/home/home.module').then(m => m.HomePageModule)
          }
        ]
      },
      {
        path: 'service',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../service/service/service.module').then(m => m.ServicePageModule)
          }
        ]
      },
      {
        path: 'course',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/course/course.module').then(m => m.CoursePageModule)
          }
        ]
      },
      {
        path: 'Update',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/into/news/news.module').then(m => m.NewsPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
