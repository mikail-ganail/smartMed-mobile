import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { catchError } from 'rxjs';
import { IAnalyze } from '../models/analyze.interface';
import { API_URL } from '../constatn';

const analyzeList: IAnalyze[] = [
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

@Injectable({
  providedIn: 'root',
})
export class AnalyzeService {
  timeSectionSig = signal<number>(1);
  actularAnalyze!: IAnalyze;
  constructor(private http: HttpClient) {
    // this.actularAnalyze = analyzeList[this.timeSectionSig()];
    // this.startAutoUpdate();
  }

  private startAutoUpdate() {
    // setInterval(() => {
    //   this.getAnswer().subscribe((data) => {
    //     this.actularAnalyze = analyzeList[this.timeSectionSig()];
    //     this.timeSectionSig.update((count) => (count + 1) % analyzeList.length);
    //   });
    // }, 10000); // Обновление каждые 30 секунд
  }

  getAnswer() {
    this.timeSectionSig.update((count) => count + 1);
    return this.http.get(`${API_URL}/analyze.json`).pipe(
      catchError((err) => {
        this.handeError(err);
        throw new Error(err.message);
      })
    );
  }

  // getResultMessage(index: number): string {
  //   const messages = ['Хорошее', 'Среднее', 'Плохое'];
  //   return messages[index % messages.length];
  // }

  private handeError(err: HttpErrorResponse): void {
    console.error(err.error.message);
  }
}
