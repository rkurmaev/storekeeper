import {Injectable} from '@angular/core';
import {HttpClient, HttpParams, HttpResponse} from '@angular/common/http';
import {Observable} from "rxjs";
import {Embedded, EmbeddedService, HardwareRequest, HardwareService, HardwareStatus} from "./hardware";
import {map} from "rxjs/operators";

//const myUrl: string = "http://nnsu-nc.herokuapp.com";
const myUrl: string = "http://nnsu-nc-data-app.herokuapp.com";
//https://nnsu-nc-data-app.herokuapp.com/hardwares/search/findAllByHardwareStatus_Id?hardwareStatusId=1


@Injectable({
    providedIn: 'root'
})

export class HttpService {

    constructor(private httpClient: HttpClient) {
    }

    public getRequestsForStorekeeper(): Observable<HardwareRequest> {
        return this.httpClient.get<HardwareRequest>(myUrl + "/hardwares");
    }

    public getAllHardwares(): Observable<Embedded> {
        return this.httpClient.get<Embedded>(myUrl + "/hardwares");
    }

    public getHardwareForStorekeeperByStatusId(hardwareStatusId: string): Observable<Embedded> {
        const options = {
            params: new HttpParams().set('hardwareStatusId', hardwareStatusId)
        };
        return this.httpClient.get<Embedded>(myUrl + "/hardwares/search/findAllByHardwareStatus_Id", options);
    }

    public replaceHardware(HardwareIdNew: string, HardwareIdOld) {
        const options = {
            params: new HttpParams().set('newHardwareId', HardwareIdNew).set('oldHardwareId', HardwareIdOld)
        };
        return this.httpClient.get(myUrl + "/hardwares/search/replaceHardware", options);
    }

    public getHardwareForStorekeeperServiceIsNull(): Observable<HardwareRequest> {
        return this.httpClient.get<HardwareRequest>(myUrl + "/hardwares/search/findAllByServiceIsNull");
    }

    public getHardwareForStorekeeperServiceIsFail(): Observable<HardwareRequest> {
        return this.httpClient.get<HardwareRequest>(myUrl + "");
    }

    public getHardwareService(hardwareId: string): Observable<HardwareService> {

        return this.httpClient.get<HardwareService>(myUrl + "/hardwares/" + hardwareId + "/service");
    }


    public updateHardwareStatus(hardwareId: string, hardwareStatusId: string) {

        const options = {
            params: new HttpParams().set('hardwareStatusId', hardwareStatusId).set('hardwareId', hardwareId)
        };
        return this.httpClient.get(myUrl + "/hardwares/search/setHardwareStatusByHardware_Id", options);
    }

    public getHardwareForStorekeeperByServiceStatusId(serviceStatusId: string): Observable<EmbeddedService> {
        const options = {
            params: new HttpParams().set('serviceStatusId', serviceStatusId)
        };
        console.log(myUrl + "/services/search/findAllByServiceStatus_Id");
        return this.httpClient.get<EmbeddedService>(myUrl + "/services/search/findAllByServiceStatus_Id", options);
    }

    public updateHardwareServiceStatus(serviceId: string, serviceStatusId: string) {

        const options = {
            params: new HttpParams().set('serviceId', serviceId).set('serviceStatusId', serviceStatusId)
        };
        return this.httpClient.get(myUrl + "/services/search/setServiceStatusByService_Id", options);
    }

}
