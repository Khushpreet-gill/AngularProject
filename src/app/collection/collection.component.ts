import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-collection',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './collection.component.html',
  styleUrl: './collection.component.scss'
})
export class CollectionComponent {
  collectionItems = [
    { name: 'Books', icon: '📖' },
    { name: 'Magazines', icon: '📑' },
    { name: 'Newspapers', icon: '📰' },
    { name: 'CDs', icon: '💿' },
    { name: 'DVDs', icon: '📀' },
    { name: 'Journals', icon: '📔' }
  ];

}
