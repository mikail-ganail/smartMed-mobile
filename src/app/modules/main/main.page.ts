import { Component } from '@angular/core';
import { AnalyzeService } from 'src/app/core/services/analyze.service';

@Component({
  selector: 'app-main',
  templateUrl: 'main.page.html',
  styleUrls: ['main.page.scss']
})
export class MainPage {
  currentResult: string = '';

  constructor(public readonly analyzeService: AnalyzeService) {}

  ngOnInit(): void {
    this.analyzeService.getAnswer().subscribe((data) => {
      // Предположим, что здесь вы получаете нужные данные
      this.updateResult();
    });
  }

  private updateResult() {
    this.currentResult = this.analyzeService.getResultMessage(
      this.analyzeService.timeSectionSig()
    );
  }
}
