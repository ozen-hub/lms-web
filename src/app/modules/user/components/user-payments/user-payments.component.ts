import {Component, OnInit} from '@angular/core';
import {ProgramWidgetComponent} from "../widget/program-widget/program-widget.component";
import {ProgramsService} from "../../../../services/program/programs.service";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-user-payments',
  standalone: true,
  imports: [
    ProgramWidgetComponent,
    NgForOf
  ],
  templateUrl: './user-payments.component.html',
  styleUrl: './user-payments.component.scss'
})
export class UserPaymentsComponent  implements OnInit {
  dataArr: any[] = [];

  constructor(private programService: ProgramsService) {
  }

  ngOnInit(): void {
    this.loadAllPayments();
  }

  private loadAllPayments() {
    this.programService.loadMyPayments().subscribe(response => {
      this.dataArr = response.data;
    })
  }
}
