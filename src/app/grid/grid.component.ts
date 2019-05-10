import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { CommonService } from "../service/common.service";
import { Grid } from "../model/grid.model";

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  dataSource: Grid[];

  constructor(private router: Router, private commonService: CommonService) { }

  ngOnInit() {
    this.commonService.getData()
      .subscribe( data => {
        this.dataSource = data;
      });
  }

}
