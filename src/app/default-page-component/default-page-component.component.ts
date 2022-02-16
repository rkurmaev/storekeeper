import { Component, OnInit } from '@angular/core';
import {Hardware, HardwareService} from "../http-rest-service/hardware";
import {Router} from "@angular/router";

@Component({
  selector: 'app-default-page-component',
  templateUrl: './default-page-component.component.html',
  styleUrls: ['./default-page-component.component.css']
})
export class DefaultPageComponentComponent implements OnInit {

  constructor(private router: Router){
  }

  ngOnInit() {
  }

}
