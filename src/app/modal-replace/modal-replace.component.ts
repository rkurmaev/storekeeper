import {Component, Input, OnInit} from '@angular/core';
import {$} from "protractor";
import {MatDialogRef} from "@angular/material";
import {HttpService} from "../http-rest-service/http-service.service";
import {
    Hardware,
    HardwareRequest,
    HardwareService,
    HardwareStatus,
    HardwareStatusId
} from "../http-rest-service/hardware";
import {ModalFixComponent} from "../modal-fix/modal-fix.component";

@Component({
    selector: 'app-modal',
    templateUrl: './modal-replace.component.html',
    styleUrls: ['./modal-replace.component.css']
})
export class ModalReplaceComponent implements OnInit {

    @Input() public hardware : Hardware;
    constructor(private httpService: HttpService, public dialogRef: MatDialogRef<ModalReplaceComponent>) {
    }

    public hardwareList: Hardware[];

    ngOnInit() {

        this.httpService.getHardwareForStorekeeperServiceIsNull().subscribe(
            (data: HardwareRequest) => {
                //this.hardwareList = data.content;
                this.hardwareList = data.hardwares;

            });

    }

    close() {
        this.dialogRef.close();
    }

    replace(hardware){
        this.httpService.replaceHardware(hardware.id, this.hardware.id).subscribe(
            (data: any) => {
                this.dialogRef.close();

            }, error => {
                this.dialogRef.close();
            });
    }

}
