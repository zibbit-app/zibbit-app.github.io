import { OrganizationComponent } from './../components/OrganizationComponent';
import { LoginComponent } from './../components/LoginComponent';
import { PrivacyComponent } from './../components/PrivacyComponent';
import {Component} from '@angular/core';

//import {CustomerComponent} from '../components/CustomerComponent';
import {HomeComponent} from "../components/HomeComponent";
import {LearnComponent} from "../components/LearnComponent";
import {DownloadsComponent} from "../components/DownloadsComponent";
import { PlansComponent } from '../components/PlansComponent';
import { CheckoutComponent } from '../components/CheckoutComponent';
import { PaymentSuccessComponent } from '../components/PaymentSuccessComponent';
import { PaymentCancelComponent } from '../components/PaymentCancelComponent';
import { RegisterComponent } from '../components/RegisterComponent';
import { AccountComponent } from '../components/AccountComponent';
import { ErrorComponent } from '../components/ErrorComponent';
import { LogoutComponent } from '../components/LogoutComponent';

//import {WelcomeComponent} from "../Component/WelcomeComponent";

export const ApplicationRoutes = [
    { path: 'logout', component: LogoutComponent },
    { path: 'error', component: ErrorComponent },
    { path: 'account', component: AccountComponent },
    { path: 'organization/:orgId', component: OrganizationComponent, pathMatch: 'full' },
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent },
    { path: 'payment-cancel', component: PaymentCancelComponent },
    { path: 'payment-success', component: PaymentSuccessComponent },
    { path: 'checkout/:planId', component: CheckoutComponent },
    { path: 'checkout', component: CheckoutComponent },
    { path: 'plans', component: PlansComponent },
    { path: 'privacy', component: PrivacyComponent },
    { path: 'downloads', component: DownloadsComponent },
    { path: 'learn', component: LearnComponent },
    { path: 'home', component: HomeComponent  },
    { path: '', component: HomeComponent  },
    // { path: '', redirectTo: '/organization', pathMatch: 'full' }
];