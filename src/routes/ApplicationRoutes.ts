import {Component} from '@angular/core';

//import {CustomerComponent} from '../components/CustomerComponent';
import {HomeComponent} from "../components/HomeComponent";
import {LearnComponent} from "../components/LearnComponent";
import {DownloadsComponent} from "../components/DownloadsComponent";

//import {WelcomeComponent} from "../Component/WelcomeComponent";

export const ApplicationRoutes = [
    { path: 'downloads', component: DownloadsComponent },
    { path: 'learn', component: LearnComponent },
    { path: 'home', component: HomeComponent  },
    { path: '', component: HomeComponent  },
];