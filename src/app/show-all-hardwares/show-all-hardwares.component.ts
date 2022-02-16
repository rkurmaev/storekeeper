import { Component, OnInit } from '@angular/core';
import {Hardware, HardwareService} from "../http-rest-service/hardware";
import {HttpService} from "../http-rest-service/http-service.service";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-show-all-hardwares',
  templateUrl: './show-all-hardwares.component.html',
  styleUrls: ['./show-all-hardwares.component.css']
})
export class ShowAllHardwaresComponent implements OnInit {

  constructor(private httpService: HttpService, public matDialog: MatDialog) {
  }

  public hardwareList: Hardware[];

  ngOnInit() {
    this.httpService.getAllHardwares().subscribe(hardwares => {
      this.hardwareList = [...hardwares._embedded.hardwares];

      this.hardwareList.forEach((hardware: Hardware) => {
        this.httpService.getHardwareService(hardware.id).subscribe(
            (data: HardwareService) => {
              hardware.hardwareService = data;
            });
      });

    });
  }




}
