import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as jsPDF from 'jspdf';

@Component({
  selector: 'app-contract-conditions',
  templateUrl: './contract-conditions.component.html',
  styleUrls: ['./contract-conditions.component.css']
})
export class ContractConditionsComponent implements OnInit {

    @ViewChild('contract') reportContent: ElementRef;

  constructor() { }

  ngOnInit() {
  }

    exportToPDF() {
    const doc = new jsPDF();
    const specialElementHandlers = {
      '#editor'(element, renderer) {
        return true;
      }
    };

    const content = this.reportContent.nativeElement;

    doc.fromHTML(content.innerHTML, 15, 15, {
      width: 150,
      elementHandlers: specialElementHandlers
    });

    doc.save('DoSerContract' + '.pdf');
  }
}


