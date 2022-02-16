import {Component, OnInit} from '@angular/core';

import { products}from '../products';
import {
    Hardware,
    HardwareStatus,
    HardwareRequest,
    HardwareStatusId,
    HardwareService, Embedded
} from "../http-rest-service/hardware";
import {HttpService} from "../http-rest-service/http-service.service";
import {forkJoin, Observable} from "rxjs";
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import {ModalReplaceComponent} from "../modal-replace/modal-replace.component";
import {ModalFixComponent} from "../modal-fix/modal-fix.component";

@Component({
selector: 'app-product-list',
templateUrl: './hardware-list.component.html',
styleUrls: ['./hardware-list.component.css']
})

export class HardwareListComponent implements OnInit {
    hardware : Hardware;
    private hardwareForStorekeeperByStatusId$: Observable<HardwareRequest>;
    constructor(private httpService: HttpService, public matDialog: MatDialog) {
    }

    //public hardwareList: Hardware[];
    public hardwareList: Hardware[];
    public hardwareListToUnder: Hardware[];
    public hardwareListToRepl: Hardware[];

    ngOnInit() {

        forkJoin([this.httpService.getHardwareForStorekeeperByStatusId(HardwareStatusId.UNDER_MAINTENANCE.toString()),
            this.httpService.getHardwareForStorekeeperByStatusId(HardwareStatusId.TO_REPLACE.toString())]).subscribe(([a, b]) => {
            this.hardwareList = [...a._embedded.hardwares, ...b._embedded.hardwares];

            this.hardwareList.forEach((hardware: Hardware) => {
                    this.httpService.getHardwareService(hardware.id).subscribe(
                        (data: HardwareService) => {
                            hardware.hardwareService = data;
                        });
                }
            )
        })
    }

    replace(hardware)
    {
        const dialogConfig = new MatDialogConfig();

        // The user can't close the dialog by clicking outside its body
        dialogConfig.disableClose = true;
        dialogConfig.id = "modal-component";
        dialogConfig.height = "700px";
        dialogConfig.width = "1000px";
        const modalDialog = this.matDialog.open(ModalReplaceComponent, dialogConfig);
        modalDialog.componentInstance.hardware=hardware;
        modalDialog.afterClosed().subscribe(result => {
            window.location.reload();
        });
    };

    fix(hardware)
    {
        const dialogConfig = new MatDialogConfig();

        // The user can't close the dialog by clicking outside its body
        dialogConfig.disableClose = true;
        dialogConfig.id = "modal-component";
        dialogConfig.height = "300px";
        dialogConfig.width = "500px";

        this.httpService.updateHardwareStatus(hardware.id, HardwareStatusId.NORMAL.toString()).subscribe(
            (data: any) => {
                const modalDialog = this.matDialog.open(ModalFixComponent, dialogConfig);
                modalDialog.componentInstance.hardware=hardware;
                modalDialog.afterClosed().subscribe(result => {
                    window.location.reload();
                });

            }, error => {
                const modalDialog = this.matDialog.open(ModalFixComponent, dialogConfig);
                modalDialog.componentInstance.hardware=hardware;
                modalDialog.afterClosed().subscribe(result => {
                    window.location.reload();
                });
                //window.alert('device has been fixed:' + hardware.name);
                //window.location.reload();
            });
    }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/