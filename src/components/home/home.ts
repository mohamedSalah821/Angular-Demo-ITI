import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink,CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
   features = [
    { icon: '🚚', title: 'شحن سريع',   desc: 'توصيل لباب بيتك في أسرع وقت' },
    { icon: '🔒', title: 'دفع آمن',    desc: 'معاملاتك محمية بالكامل' },
    { icon: '↩️', title: 'إرجاع مجاني', desc: 'مش عاجبك؟ ارجعه بدون تعقيد' },
    { icon: '💬', title: 'دعم 24/7',   desc: 'فريقنا هنا دايماً لمساعدتك' },
  ];
}
