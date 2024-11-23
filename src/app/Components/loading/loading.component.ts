import { Component } from '@angular/core';
import { LoadingService } from 'src/app/Services/loading.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent {

  constructor(private loadingService: LoadingService) {}

  loading = this.loadingService.loadingSubject;

  textSequence: string[] = ['O', 'OY', 'OYA']; // النصوص المتتالية
  currentText: string = ''; // النص الحالي الذي يتم عرضه
  private index: number = 0; // مؤشر النصوص
  private intervalId: any;

  ngOnInit(): void {
    this.startAnimation();
  }

  startAnimation(): void {
    this.intervalId = setInterval(() => {
      this.currentText = this.textSequence[this.index];
      this.index = (this.index + 1) % this.textSequence.length; // التكرار بعد انتهاء المصفوفة
    }, 500); // تغيير النص كل نصف ثانية
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId); // تنظيف الـ interval عند تدمير المكون
    }
  }

}
