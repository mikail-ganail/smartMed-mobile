import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { catchError } from 'rxjs';
import { IAnalyze, IAnalyzeData } from '../models/analyze.interface';
import { API_URL } from '../constatn';
@Injectable({
  providedIn: 'root',
})
export class AnalyzeService {
  analyzeList: IAnalyze[] = [
    {
      pulse: 50,
      pressure: 70,
      saturation: 200,
      breath: 199,
    },
    {
      pulse: 100,
      pressure: 79,
      saturation: 90,
      breath: 120,
    },
    {
      pulse: 103,
      pressure: 69,
      saturation: 89,
      breath: 120,
    },
  ];
  analyzeHistory: IAnalyzeData[] = []; // New property to store current analyze list
  states: [string, string, string] = ['Хорошее', 'Среднее', 'Плохое']

  timeSectionSig = signal<number>(0);
  actularAnalyze!: IAnalyze;
  constructor(private http: HttpClient) {
    this.actularAnalyze = this.analyzeList[this.timeSectionSig()];
    this.startAutoUpdate();
  }

  private startAutoUpdate() {
    setInterval(() => {
      this.getAnswer().subscribe((data) => {
        this.actularAnalyze = this.analyzeList[this.timeSectionSig()];
        this.timeSectionSig.update((count) => (count + 1) % this.analyzeList.length);
        this.analyzeHistory.push(
          {
            analyz: this.actularAnalyze,
            state: this.states[this.timeSectionSig()],
            time: this.getCurrentTimeFormatted()
          }
        )
        console.log(this.timeSectionSig())
      });
    }, 4000); // Обновление каждые 30 секунд
  }

  private getCurrentTimeFormatted(): string {
    const now = new Date();
    return now.toTimeString().split(' ')[0]; // hh:mm:ss
  }

  getAnswer() {
    return this.http.get(`${API_URL}/analyze.json`).pipe(
      catchError((err) => {
        this.handeError(err);
        throw new Error(err.message);
      })
    );
  }

  getResultMessage(index: number): string {
    const messages = ['Хорошее', 'Среднее', 'Плохое'];
    return messages[index % messages.length];
  }

  private handeError(err: HttpErrorResponse): void {
    console.error(err.error.message);
  }
}
