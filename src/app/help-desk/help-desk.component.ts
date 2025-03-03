import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-help-desk',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './help-desk.component.html',
  styleUrl: './help-desk.component.scss'
})
export class HelpDeskComponent {
  formData = {
    name: '',
    prn: '',
    department: '',
    email: '',
    enquiry: '',
    description: ''
  };

  submitForm() {
    console.log('Form Data:', this.formData);
  }

  cancelForm() {
    this.formData = {
      name: '',
      prn: '',
      department: '',
      email: '',
      enquiry: '',
      description: ''
    };
  }
}
