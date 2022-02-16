import {Component, Input, OnInit} from '@angular/core';
import {HttpService} from "../http-rest-service/http-service.service";
import {MatDialogRef} from "@angular/material";
import {ModalReplaceComponent} from "../modal-replace/modal-replace.component";
import {Hardware} from "../http-rest-service/hardware";

@Component({
  selector: 'app-modal-fix',
  templateUrl: './modal-fix.component.html',
  styleUrls: ['./modal-fix.component.css']
})
export class ModalFixComponent implements OnInit {

  @Input() public hardware : Hardware;
  constructor( public dialogRef: MatDialogRef<ModalReplaceComponent>) {
  }

  ngOnInit() {
  }

  close() {
    this.dialogRef.close();
  }

}
