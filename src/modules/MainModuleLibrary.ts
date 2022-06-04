import { Bootstrapper } from '../Bootstrapper';
import { NgModule, APP_INITIALIZER, Injector, ErrorHandler } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import {FormsModule} from "@angular/forms"
import { RouterModule }   from '@angular/router';
import { ApplicationRoutes }   from '../routes/ApplicationRoutes';  
import {AppComponent} from '../components/AppComponent';
import { promises } from 'fs'; 
import { GlobalErrorHandler } from '../utilities/GlobalErrorHandler';

// import {HomeComponent} from '../components/HomeComponent'
// import {HeaderComponent} from '../components/HeaderComponent'
// import {FooterComponent} from '../components/FooterComponent'
// import { LearnComponent } from '../components/LearnComponent';
// import { DownloadsComponent } from '../components/DownloadsComponent';
// import { CardComponent } from '../components/CardComponent';
// import { MenuComponent } from '../components/MenuComponent';
// import { CarouselComponent } from '../components/CarouselComponent';

export function initializeApp(injector: Injector) {
    return (): Promise<any> => {
        return Promise.resolve(); 
        // return Bootstrapper.loadAsyncServices(injector)
        // .then(function(){
        //     console.log("ini success");
        // }, function(fail){
        //     console.log("init fail");
        //     console.log(fail);
        // })   
    }
  }


@NgModule({
    
    imports: [RouterModule.forRoot(ApplicationRoutes,
        {
            scrollPositionRestoration: 'enabled'
        }
        ),
        BrowserModule,
        FormsModule],
    // declarations: [
    //     HeaderComponent, 
    //     AppComponent, 
    //     FooterComponent, 
    //     HomeComponent,
    //     DownloadsComponent,
    //     LearnComponent, 
    //     CardComponent, 
    //     MenuComponent, 
    //     CarouselComponent
    // ],
    declarations: Bootstrapper.components.map((mod) => {
        return mod['mod'];
    }),
    providers: [
        {
          provide: APP_INITIALIZER,
          useFactory: initializeApp,
          multi: true,
          deps: [Injector]
        },
        {
          provide: ErrorHandler,
          useClass: GlobalErrorHandler
        }
    ],
    bootstrap: [AppComponent]
})
export class MainModuleLibrary { }