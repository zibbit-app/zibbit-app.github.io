import axios from 'axios';

import { Injectable } from '@angular/core';
import { bind } from '@angular/core/src/render3/instructions';

@Injectable({
  providedIn: 'root',
})
export class GateKeeperClient {

    private baseUrl: string;
    private routingKey: string;
    private queryUrl: string = "";
    private customHeaders: object
  
    constructor() { 
        //this.baseUrl = "http://localhost:61011/";
        this.baseUrl = 'https://evanapps-connectionmanager.azurewebsites.net/';
        this.dispatchQuery.bind(this);
    }

    public Connect(){
        var url = this.baseUrl + "/api/connections";
        return axios.get(url)
        .then(function (response) {
            var connections = response.data;
            return connections;
        })
        .then(connections => {
            this.queryUrl = connections.queryServiceUri;
            this.routingKey = connections.clientRoutingKey.toString();
            this.customHeaders = this.getCustomHeaders();
        });
    }

    private getCustomHeaders(): object {
        var headers: object = {
            "eventRoutingKey": this.routingKey,
            "assembly-name": "MacroManagerGateKeeper.Contract, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
        }
        return headers;
    }


    public dispatchQuery(queryName, query = {}){
        var connectPromise = this.queryUrl == "" ? this.Connect() : Promise.resolve();
        return connectPromise
            .then(()=>{
                var url = this.queryUrl + "/" + queryName;
                return axios.post(url, query, {
                    headers: this.customHeaders
                  })
            })
            .then(function (response) {
            return response.data;
          })
    }

}