import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.scss'],
  standalone: true
})
export class DoctorComponent {
  @Output() closeOverlayy = new EventEmitter<void>();
  
  close() {
    this.closeOverlayy.emit(); // Эмитируем событие о закрытии
  }

}
