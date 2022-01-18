export class Installer {
    constructor(title, version, downloadUrl, description = ''){
        this.title = title;
        this.description = description;
        this.downloadUrl = downloadUrl;
        this.version = version;
    }
    version: string = "";
    downloadUrl: string = "";
    title: string = "";
    description: string = "";
}