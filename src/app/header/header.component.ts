import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  username: string = 'Anagha'; // Example username
  profileImage: string = 'assets/profile.jpg'; 

  constructor() {}

  onSearch(event: any) {
    const query = event.target.value;
    console.log('Searching for:', query);
    // Implement search logic here
  }
  
}
