import { Component, Input, OnInit } from '@angular/core';
import { BackendErrorsInterface } from '../../types/backendErrors.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'mc-backend-error-messages',
  templateUrl: './backend-error-messages.component.html',
  styleUrls: ['./backend-error-messages.component.scss'],
  imports: [CommonModule],
  standalone: true
})
export class BackendErrorMessagesComponent implements OnInit{
  @Input()
  backendErrors: BackendErrorsInterface = {};

  errorMessages: string[] = [];

  constructor(){

  }

  ngOnInit(): void {
    this.errorMessages = Object.keys(this.backendErrors).map((name: string) => {
      const messages = this.backendErrors[name].join(' ');
      return `${name} ${messages}`;
    })
  }
}
