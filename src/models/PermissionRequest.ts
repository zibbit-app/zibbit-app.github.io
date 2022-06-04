import { ResourceType } from './ResourceType';

// public ResourceType ResourceType { get; set; }
// public string ResourceOwnerId { get; set; }
// public string RequestingUserId { get; set; }
// public List<string> RequestedScopes { get; set; }

export class PermissionRequest {
    resourceType: ResourceType;
    resourceOwnerId: string;
    RequestingUserId: string
    RequestedScopes: string[];
}