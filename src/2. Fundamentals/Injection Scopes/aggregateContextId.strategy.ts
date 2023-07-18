import { HostComponentInfo, ContextId, ContextIdFactory, ContextIdStrategy } from "@nestjs/core";
import { info } from "console";

import { request } from "express";


// this strategy of creating sub-trees to avoid the creation of new contexts
// for each request is called the Aggregate Context Id Strategy and is not ideal
// for applications that require a high level of isolation between requests
// and have large number of tenants.


//this strategy can be registered anywhere since it applies globally
const tenants = new Map<string, ContextId>();

export class AggregateContextIdStrategy implements ContextIdStrategy{
    attach(contextId: ContextId, request: Request) {
        const tenantId = request.headers['x-tenant-id'] as string;
        let tenantSubTreeId: ContextId;

        if(tenants.has(tenantId)){
            tenantSubTreeId = tenants.get(tenantId);
        }else{
            tenantSubTreeId = ContextIdFactory.create();
            tenants.set(tenantId, tenantSubTreeId);
        }

        return (info: HostComponentInfo) => info.isTreeDurable ? tenantSubTreeId : contextId; 
    }
}