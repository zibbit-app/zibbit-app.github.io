import {Scope, AppScopes } from './PermissionScopes';

// public ResourceType ResourceType { get; set; }
// public string ResourceOwnerId { get; set; }
// public string RequestingUserId { get; set; }
// public List<string> RequestedScopes { get; set; }

export class PermissionTicket {
    request: PermissionRequest;
    permissions: string[];


    // public canRead(){
    //     return this.containsScope(AppScopes.account.Read);
    // }

    // public canWrite(){
    //     return this.containsScope(PermissionScopeType.Write);
    // }
}