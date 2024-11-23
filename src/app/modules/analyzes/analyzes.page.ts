import { Component, HostListener } from '@angular/core';
import { AnalyzeService } from 'src/app/core/services/analyze.service';

@Component({
  selector: 'app-analyzes',
  templateUrl: 'analyzes.page.html',
  styleUrls: ['analyzes.page.scss'],
})
export class AnalyzesPage {
  currentResult: string = '';
  isOpenList: boolean[] = [];

  constructor(public readonly ass: AnalyzeService) {}

  ngOnInit(): void {
    this.ass.getAnswer().subscribe((data) => {
      this.isOpenList.push(false);
      // Предположим, что здесь вы получаете нужные данные
      this.updateResult();
    });
  }

  private updateResult() {
    this.currentResult = this.ass.getResultMessage(this.ass.timeSectionSig());
  }

  openAll(index: number) {
    this.isOpenList[index] = !this.isOpenList[index];
  }

  isOverlayVisible = false;

  toggleOverlay() {
    this.isOverlayVisible = !this.isOverlayVisible;
  }

  onOverlayClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    const isInsideComponent = target.closest('app-eripomoch') !== null;

    // Если клик был вне компонента Eripomoch, закрываем оверлей
    if (!isInsideComponent) {
      this.toggleOverlay();
    }
  }

  isDoktor: boolean = false;

  openDoktor() {
    this.isDoktor = !this.isDoktor
  }
}
