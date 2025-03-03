import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [NgFor],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {
  tableData=[
    {
      "image":"",
      "title": "Is the moon Upside Down?",
      "author" : "Greg Quicke",
      "bookCode": "786.66 PAR",
      "issueDate": "6 Dec 2024",
      "returnDate": "13 Dec 2024",
      "overdue": "7 days",
      "totalFine": "10/-"
    },
    {
      "image":"",
      "title": "Is the moon Upside Down?",
      "author" : "Greg Quicke",
      "bookCode": "786.66 PAR",
      "issueDate": "6 Dec 2024",
      "returnDate": "13 Dec 2024",
      "overdue": "7 days",
      "totalFine": "10/-"
    }
  ]
}
