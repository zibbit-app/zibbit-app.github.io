import { PermissionTicket } from './PermissionTicket';

export class ScopeSet{
    public separator: string;
    public prefix: string;

    constructor(prefix: string, separator: string = "."){
        this.prefix = prefix;
        this.separator = separator;
    }



}


export class ManageScopeSet extends ScopeSet{
    constructor(prefix: string, separator: string = "."){
        super(prefix, separator);
    }

    public Manage: Scope = new Scope(this, "Manage");
}

export class ReadWriteScopeSet extends ScopeSet{

    constructor(prefix: string, separator: string = "."){
        super(prefix, separator);
    }

    public Read: Scope = new Scope(this, "Read");
    public Write: Scope = new Scope(this, "Write");
 
}


// export class AccountScopes extends ScopeSet{
//     constructor(){
//         super("Account")
//     }
//     Read: Scope = new Scope(this, "Read");
//     Write: Scope = new Scope(this, "Write");

// }



export class Scope{
    protected scopeSet: ScopeSet
    protected name: string;
    constructor(scopeSet: ScopeSet, name: string){
        this.scopeSet = scopeSet;
        this.name = name;
    }

    public get label():string{
        var label = this.scopeSet.prefix + this.scopeSet.separator + this.name;
        return label;
    }
}

export class AppScopes{
    public static userAccount: ManageScopeSet = new ManageScopeSet("UserAccount");
    public static userBilling: ManageScopeSet = new ManageScopeSet("UserBilling");
    public static orgAccount: ReadWriteScopeSet = new ReadWriteScopeSet("OrgAccount");

}


export class ScopeUtils{
    public static containsScope(ticket: PermissionTicket, scope: Scope): boolean{

        var label = scope.label.toLowerCase();
        var hasScope = ticket.permissions.findIndex(p => p.toLowerCase() == label) > -1;

        return hasScope;
    }
}

