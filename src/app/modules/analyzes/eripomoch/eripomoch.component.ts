import { Component, ElementRef, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-eripomoch',
  templateUrl: './eripomoch.component.html',
  styleUrls: ['./eripomoch.component.scss'],
  standalone: true
})
export class EripomochComponent {
  @Output() closeOverlay = new EventEmitter<void>();

  close() {
    this.closeOverlay.emit(); // Эмитируем событие
  }

}
