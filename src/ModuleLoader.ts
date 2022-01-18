const path = require('path')
export class ModuleLoader {
    public static getModulesByContext(ctx, ext = ".ts"): any[] {
        var moduleInfoCollection = [];
        ctx.keys().forEach(key => {
            var info = [];
            var filename = path.basename(key);
            var name = path.basename(key, ext);
            // var ext = parse(filename).ext; 
            var modContext = ctx(key);
            var mod = modContext[name];
            info["mod"] = mod;
            info["name"] = name;
            // info["ext"] = ext;
            moduleInfoCollection.push(info);
        });
        return moduleInfoCollection;
    }
    // public static getModules(dirPath: string, deep: boolean = true, regExFilter: RegExp = null): any[] {
    //     var moduleInfoCollection = [];
    //     var ctx = require.context(dirPath, deep, regExFilter)
    //     ctx.keys().forEach(key => {
    //         var info = [];
    //         var filename = path.basename(key);
    //         var name = path.parse(filename).name;
    //         var ext = path.parse(filename).ext; 
    //         var modContext = ctx(key);
    //         var mod = modContext[name];
    //         info["mod"] = mod;
    //         info["name"] = name;
    //         info["ext"] = ext;
    //         moduleInfoCollection.push(info);
    //     });
    //     return moduleInfoCollection;

    // }
}