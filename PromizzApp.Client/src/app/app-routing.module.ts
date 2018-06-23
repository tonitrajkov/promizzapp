import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './core/auth.guard';
// import { AuthService } from './core/auth.service';
import { AuthModule } from './auth/auth.module';
import { PublicModule } from './public/public.module';

// Components
import { PublicComponent } from './_layouts/public/public.component';
import { SecureComponent } from './_layouts/secure/secure.component';

import { HomeComponent } from './public/home/home.component';
import { PricingComponent } from './public/pricing/pricing.component';
import { PrivacyComponent } from './public/privacy/privacy.component';
import { ProductComponent } from './public/product/product.component';
import { SecurityComponent } from './public/security/security.component';
import { TermOfServicesComponent } from './public/term-of-services/term-of-services.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { PromisesComponent, PromiseDetailComponent } from './promises';
import { ProfileComponent } from './profile';

import { SigninCbComponent } from './shared/oidc-calbacks/signin-cb.component';
import { RedirectSilentRenewComponent } from './shared/oidc-calbacks/redirect-silent-renew.component';

const routes: Routes = [
    // { path: '', redirectTo: '/home', pathMatch: 'full', },
    {
        path: '',
        component: PublicComponent,
        children: [
            { path: '', component: HomeComponent, pathMatch: 'full' }
        ]

    },
    {
        path: '',
        component: PublicComponent,
        loadChildren: () => AuthModule
    },
    {
        path: '',
        component: SecureComponent,
        // canActivate: [AuthGuard],
        children: [
            { path: 'dashboard', component: DashboardComponent },
            { path: 'promises', component: PromisesComponent },
            { path: 'promise/:promiseId', component: PromiseDetailComponent },
            { path: 'account/:username', component: ProfileComponent }
        ]
    },

    { path: 'signin-cb', component: SigninCbComponent },
    { path: 'redirect-silentrenew', component: RedirectSilentRenewComponent },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [AuthGuard]
})
export class AppRoutingModule { }