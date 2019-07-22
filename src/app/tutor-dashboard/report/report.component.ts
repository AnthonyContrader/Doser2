import { Component, OnInit } from '@angular/core';
import { EventDTO } from 'src/app/dto/eventdto';
import { EventService } from 'src/app/services/event.service';
import { ItemDTO } from 'src/app/dto/itemdto';
import { ItemService } from 'src/app/services/item.service';
import {ViewChild, ElementRef} from '@angular/core';
import * as XLSX from 'xlsx';


@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

    events: EventDTO[];
    items: ItemDTO[];
    eventCount: EventDTO[][][] = [];
    item: ItemDTO;
    selectedevents: EventDTO[] = new Array<EventDTO>();
    @ViewChild('table') table: ElementRef;

  constructor(private eventService: EventService, private itemService: ItemService) {
  }

  ngOnInit() {
      this.eventCount = new Array<Array<EventDTO[]>>();
      this.items = new Array<ItemDTO>();
      this.events = new Array<EventDTO>();
      this.getAll();
  }

  getAll() {
    this.itemService.getAll().subscribe(items => {
        this.items = items;
        this.buildMatrix();
    });
  }

    buildMatrix() {
        const date: Date = new Date();
        const n: number = date.getDate();
        const w: number = date.getDay();

        // tslint:disable-next-line: prefer-for-of
        for (let i = 0; i < this.items.length; i++) {
            const array = new Array<EventDTO[]>();
            this.eventCount.push(array);
            this.item = this.items[i];
            for (let j = 0; j < 7; j++) {

                // SETS the date considering today's date (n), today's weekday (w) and what day we want to display (j);
                date.setDate(n - ( ( w - j ) ) + 1 );
                this.eventService.getAllByItemAndDate(this.item.id, date).subscribe(events => {
                this.events = events;
                array.push(this.events);
                });
            }
        }
    }

    select(events: EventDTO[]) {
        this.selectedevents = events;
    }

    ExportToExcel() {
      const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(this.table.nativeElement);
      const wb: XLSX.WorkBook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

      /* save to file */
      XLSX.writeFile(wb, 'EventReport.xlsx');

    }
}
