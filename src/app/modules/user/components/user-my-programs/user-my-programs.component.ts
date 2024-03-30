import {Component, OnInit} from '@angular/core';
import {DatePipe, NgForOf} from "@angular/common";
import {ProgramWidgetComponent} from "../widget/program-widget/program-widget.component";
import {ProgramsService} from "../../../../services/program/programs.service";

@Component({
  selector: 'app-user-my-programs',
  standalone: true,
  imports: [DatePipe, ProgramWidgetComponent, NgForOf],
  templateUrl: './user-my-programs.component.html',
  styleUrl: './user-my-programs.component.scss'
})
export class UserMyProgramsComponent implements OnInit {
  dataArr: any[] = [];

  constructor(private programService: ProgramsService) {
  }

  ngOnInit(): void {
    this.loadAllPrograms();
  }

  private loadAllPrograms() {
    this.programService.loadMyPrograms().subscribe(response => {
      this.dataArr = response.data;
    })
  }
}
