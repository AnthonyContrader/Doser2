import { Component, OnInit, Input } from '@angular/core';
import { EventDTO } from 'src/app/dto/eventdto';

@Component({
  selector: 'app-report-details',
  templateUrl: './report-details.component.html',
  styleUrls: ['./report-details.component.css']
})
export class ReportDetailsComponent implements OnInit {

    @Input() events: EventDTO[];

  constructor() { }

  ngOnInit() {
  }

}
