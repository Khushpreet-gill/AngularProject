import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ NgFor, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  menuItems= [
    { label: 'Home', icon: 'icon-home', active: true},
    { label: 'Collection', icon: 'icon-collection', active: false},
    { label: 'E-database', icon: 'icon-database', active: false},
    { label: 'Overdue Charges', icon: 'icon-overdue', active: false},
    { label: 'Help Desk', icon: 'icon-helpdesk', active: false},
    { label: 'History', icon: 'icon-history', active: false},
    { label: 'Library Rules', icon: 'icon-rules', active: false},
  ];

  otherItems=[
    { label: 'Help', icon: 'icon-help'},
    {label: 'Settings', icon: 'icon-settings'},
    {label: 'Account', icon: 'icon-account'}
  ];
}
