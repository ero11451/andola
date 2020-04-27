import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path:'',
    loadChildren: () => import('./registrationsystem/registrationpage/registrationpage.module').then(m => m.RegistrationpagePageModule)
  }, 
 
  // {
  //   path: '',
  //   loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  // },
  {
    path: 'service',
    loadChildren: () => import('./service/service/service.module').then( m => m.ServicePageModule)
  },
  {
    path: 'news',
    loadChildren: () => import('./pages/into/news/news.module').then( m => m.NewsPageModule)
  },

  {
    path: 'course',
    loadChildren: () => import('./pages/course/course.module').then( m => m.CoursePageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'hub',
    loadChildren: () => import('./pages/hub/hub.module').then( m => m.HubPageModule)
  },
  
  {
    path: 'login',
    loadChildren: () => import('./registrationsystem/login/login.module').then( m => m.LoginPageModule)
  }, 

  {
    path: 'signup',
    loadChildren: () => import('./registrationsystem/signup/signup.module').then( m => m.SignupPageModule)
  }, 

  {
    path: 'game',
    loadChildren: () => import('./game/game.module').then( m => m.GamePageModule)
  },
  {
    path: 'infodetials',
    loadChildren: () => import('./pages/into/into-detials/into-detials.module').then( m => m.IntoDetialsPageModule)
  },  
   {
    path: '**',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'servicedetails',
    loadChildren: () => import('./service/servicedetails/servicedetails.module').then( m => m.ServicedetailsPageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
