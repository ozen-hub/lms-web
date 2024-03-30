import {Component, Input} from '@angular/core';
import {DatePipe, NgForOf} from "@angular/common";

@Component({
  selector: 'app-program-widget',
  standalone: true,
  imports: [
    DatePipe,
    NgForOf
  ],
  templateUrl: './program-widget.component.html',
  styleUrl: './program-widget.component.scss'
})
export class ProgramWidgetComponent {
  @Input() name:string='';
  @Input() cost:string='';
  @Input() startDate:string='';
  @Input() languages:any[]=[];
}
