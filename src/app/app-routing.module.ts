import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./liga-clubs/liga-clubs-routing.module').then((m) => m.LigaClubsRoutingModule)
        
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'teams',
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}