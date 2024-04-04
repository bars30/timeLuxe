import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './pages/home/home.component';
import { StoreComponent } from './pages/store/store.component';
import { AdminComponent } from './adminpages/admin/admin.component';
import { BestselledComponent } from './adminpages/bestselled/bestselled.component';
import { RolexStoreComponent } from './components/storecompo/rolex-store/rolex-store.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'store/:brand/:coll/:id',
        component: StoreComponent,
      },
      {
        path: 'store/:id',
        component: StoreComponent,
      },
      {
        path: 'store/:coll/:id',
        component: StoreComponent,
      },
      {
        path: 'store',
        component: StoreComponent,
      },
    ]
  },
  {
    path: 'admin',
    children: [
      {
        path: '',
        component: AdminComponent
      },
      {
        path: 'bestselles',
        component: BestselledComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
