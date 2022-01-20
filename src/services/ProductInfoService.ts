import { Injectable } from '@angular/core';
import { AppConfig } from '../utilities/AppConfig';
import { GateKeeperClient } from '../utilities/GateKeeperClient';

import {Card} from '../models/Card';
import {Installer} from '../models/Installer';
import { promises } from 'fs';
import { Benefit } from '../models/Benefit';
import { TutorialStep } from '../models/TutorialStep';


@Injectable({
  providedIn: 'root',
})
export class ProductInfoService {
    private config: AppConfig;
    private gateKeeperClient: GateKeeperClient;
    private productName: string;
    private logoUrl: string;
    private email: string;
    private imageUrls: string[];
    private cards: Card[];
    private installers: Installer[];

  
    constructor(client: GateKeeperClient) {
      this.gateKeeperClient = client;
      this.config = new AppConfig;
      this.productName = "Zibbit";
      this.email = "zibbit.info@gmail.com";
      this.imageUrls = this.initializeImages();
      this.cards = this.initializeCards();
      this.installers = this.initializeInstallers();
    }

    public getSummaryBenefit(): Benefit{
      var exhibitBen = new Benefit("Summary");
      //exhibitBen.icon = "far fa-folder";
      exhibitBen.items.push("Easy to use");
      exhibitBen.items.push("Customizable");
      exhibitBen.items.push("Reliable results");
      return exhibitBen;
    }

    public getBenefits(): Benefit[]
    {
      var benefits = [];

      // var exhibitBen = new Benefit("Manage Exhibits");
      // exhibitBen.items.push("Add, remove, and re-order exhibits");
      // exhibitBen.items.push("Insert references to exhibits");
      // exhibitBen.items.push("Style references");

      var exhibitBen = new Benefit("Exhibits");
      exhibitBen.icon = "far fa-folder";
      exhibitBen.items.push("Add, remove, and re-order");
      exhibitBen.items.push("Document preview");

      var refBen = new Benefit("References");
      refBen.icon = "fas fa-link";
      refBen.items.push("Customize labels");
      refBen.items.push("Auto update");

      var publishBen = new Benefit("PDF");
      publishBen.icon = "far fa-file-pdf";
      publishBen.items.push("Appendix of exhibits");
      publishBen.items.push("Hyperlinked exhibit references");
      publishBen.items.push("Bookmarks");

      var templateBen = new Benefit("Templates");
      templateBen.icon = "fas fa-toolbox";
      templateBen.items.push("Affidavit");
      templateBen.items.push("Custom templates");
      templateBen.items.push("Dynamic properties");

      
      benefits.push(exhibitBen, refBen, publishBen, templateBen);
      return benefits;
    }

    public getInstallers(): Installer[]{
      return this.installers;
    }

    public getEmail(){
      return this.email;
    }

    public getLogoUrl(isDark = true): string{
      return this.config.getUploadsPath() + '/main/Zibbit_Logo_Dark.ico';
    }

    public getSpinnerUrl(): string{
      return this.config.getUploadsPath() + '/main/spinner-circle.gif';
    }

    private getInstaller(title: string, version: string): Installer{
      var downloadsPath = this.config.getUploadsPath() + '/installers/';
      var url = downloadsPath + `${title}_v${version}.msi`;
      var installer1 = new Installer(title + "_v" + version, version, url);
      return installer1;
    }

    private initializeInstallers(): Installer[]{
      
      var title = 'zibbit';
      var installer1 = this.getInstaller(title, '1.0.9.0'); //new Installer(title + "_v" + version, version, url);

      //var installer1 = this.getInstaller(title, '1.0.7.0'); //new Installer(title + "_v" + version, version, url);

      
      // var downloadsPath = this.config.getUploadsPath() + '/macro-manager-installers';
      // var title = 'MacroManager';
      // var version = '1.1.68.0';
      // var url = downloadsPath + '/MacroManager_v1.1.68.0.msi';
      // var installer1 = new Installer(title + "_v" + version, version, url);

      // var title = 'MacroManager';
      // var version = '1.1.64.0';
      // var url = downloadsPath + '/MacroManager_v1.1.64.0.msi';
      // var installer1 = new Installer(title + "_v" + version, version, url);

      // var downloadsPath = this.config.getUploadsPath() + '/macro-manager-installers';
      // var title = 'MacroManager';
      // var version = '1.0.7';
      // var url = downloadsPath + '/MacroManager_v1.0.7.msi';
      // var installer1 = new Installer(title + "_v" + version, version, url);

      // var downloadsPath = this.config.getUploadsPath() + '/macro-manager-installers';
      // var title = 'MacroManager';
      // var version = '1.0.8';
      // var url = downloadsPath + '/MacroManager_v1.0.8.msi';
      // var installer2 = new Installer(title + "_v" + version, version, url);


      // var downloadsPath = this.config.getUploadsPath() + '/macro-manager-installers';
      // var title = 'MacroManager';
      // var version = '1.0.9';
      // var url = downloadsPath + '/MacroManager_v1.0.9.msi';
      // var installer3 = new Installer(title + "_v" + version, version, url);


      var downloads: Installer[] = [
        // installer3,
        // installer2, 
        installer1
      ]
      return downloads;
    }


    // public getInstallers(){
    //   return this.gateKeeperClient.dispatchQuery("GetClientApplicationInstallerVersionsQuery")
    //   .then(function(data){
    //     var dataItems = data.items;
    //     var installers: Array<Installer> = [];
    //     dataItems.forEach(function(item){
    //       var title = item.title + " " + item.version
    //       if(installers.length == 0) {title += " (Latest)"}
    //       var installer = new Installer(title, item.version, item.filename)
    //       installers.push(installer);
    //     });
    //     return installers;
    //   });

    // }

    public DownLoadInstaller(version){
      var queryData = {
        TargetVersion: version,
      };
      return this.gateKeeperClient.dispatchQuery("GetClientApplicationInstallerQuery", queryData)
      .then(data => {
        var arrayBuff = this.base64ToArrayBuffer(data.attachment);
        this.saveByteArray(data.filename, arrayBuff);
      });
    }

    private base64ToArrayBuffer(base64) {
      var binaryString = window.atob(base64);
      var binaryLen = binaryString.length;
      var bytes = new Uint8Array(binaryLen);
      for (var i = 0; i < binaryLen; i++) {
         var ascii = binaryString.charCodeAt(i);
         bytes[i] = ascii;
      }
      return bytes;
   }

   private saveByteArray(filename, byte) {
    var blob = new Blob([byte], {type: "application/octet-stream"});
    var link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = filename;
    link.click();
}

    public GetProductImage(): string {
      var imagesPath = this.config.getUploadsPath() + '/product-images/full-window/';
      var img = imagesPath + 'exhibits.PNG';
      return img;
    }

    public getImageUrls(): string[]{
      return this.imageUrls;
    }

    public getCards(){
      return this.cards;
    }

    public getImage(imgPath: string)
    {
      return this.config.getUploadsPath() + '/product-images/' + imgPath;
    }

    get tutorial(): Map<string, TutorialStep[]>{
      var imgs = this.imageUrlDict;
      var tutorialMap = new Map<string, TutorialStep[]>();

      var step_1a = new TutorialStep("Exhibit Folder", imgs.get('get-started'), imgs.get("icon-folder"), 1);
      step_1a.items.push("Select a folder to manage your collection of PDF exhibits.");
      step_1a.items.push("These exhibits will be used to generate an appendix.");


      var step_1b = new TutorialStep("Manage Exhibits", imgs.get('manage-exhibits'), imgs.get("icon-folder"), 1);
      step_1b.items.push("Exhibits can be added, removed, and re-ordered at any time.");
      step_1b.items.push("After an exhibit is added, it can be referenced throughout your document.");


      var step_2a = new TutorialStep("Insert References", imgs.get("insert-ref"), imgs.get("icon-folder"), 1);
      step_2a.items.push("Insert references to your exhibits throughout your document.");
      step_2a.items.push("References can hyperlink to exhibits in your appendix.");
      step_2a.items.push("Exhibits can be sorted based on the order of appearance of references in the document.");


      var step_2b = new TutorialStep("Style References", imgs.get("style-ref"), imgs.get("icon-style"), 3);
      step_2b.items.push("Choose the label text, style, and sequence type (alphabetical / numeric)");

      var step_3a = new TutorialStep("Publish PDF", imgs.get("publish"), imgs.get("icon-publish"), 3);
      step_3a.items.push("Generate a PDF document with an appendix of exhibits.");
      step_3a.items.push("Decide which exhibits to include in your appendix.");
      step_3a.items.push("Create PDF bookmarks (optional).");



      tutorialMap.set("Exhibits", [step_1a ]); //, step_1b]);
      tutorialMap.set("References", [step_2a]);//, step_2b]);
      tutorialMap.set("Publish", [step_3a]);//, step_2b]);
      return tutorialMap;
    }

    get imageUrlDict(): Map<string,string>{
      var urlMap = new Map<string, string>();
      urlMap.set("get-started", this.getImage('exhibits.PNG'));
      urlMap.set("manage-exhibits", this.getImage('exhibits.PNG'));
      urlMap.set("insert-ref", this.getImage('insert-ref.PNG'));
      urlMap.set("style-ref", this.getImage('refLabel.PNG'));
      urlMap.set("publish", this.getImage('publishPdf.PNG'));

      urlMap.set("get-started-window", this.getImage('get-started-window.PNG'));
      urlMap.set("manage-exhibits-window", this.getImage('full-window/exhibits.PNG'));
      urlMap.set("insert-ref-window", this.getImage('insert-ref-window.PNG'));
      urlMap.set("style-ref-window", this.getImage('style-ref-window.PNG'));
      urlMap.set("publish-window", this.getImage('publish-window.PNG'));

      urlMap.set("icon-zibbit", this.getImage('icons/zibbit.png'));
      urlMap.set("icon-folder", this.getImage('icons/folder.png'));
      urlMap.set("icon-insert", this.getImage('icons/add.png'));
      urlMap.set("icon-style", this.getImage('icons/brush.png'));
      urlMap.set("icon-publish", this.getImage('icons/publish.png'));


      return urlMap;
    }



    private initializeImages(){
      var imagesPath = this.config.getUploadsPath() + '/product-demo-images';

      var urls = [
        imagesPath + '/packages.png',
        imagesPath + '/dashboard.png',
        imagesPath + '/pkgEditor.png',
        imagesPath + '/macroEditorSource.png',
        imagesPath + '/macroEditorProps.png',
        imagesPath + '/installPackage.png',
        imagesPath + '/packagesLoggedOut.png',
      ]
      return urls;
    }

    private initializeCards(): Card[]{
      var cards = [
        // new Card('Learn', 'Get started by completing a quick tutorial that demonstates how to install a package', '/learn'),
        new Card('Download', 'Follow this link to get the latest version of this application', '/downloads')
      ]
      return cards;
    }


}