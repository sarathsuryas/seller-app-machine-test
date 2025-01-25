import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
interface MetricCard {
  title: string;
  value: string;
  change: {
    value: string;
    isPositive: boolean;
  };
}

@Component({
  selector: 'app-metric-cards',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './metric-cards.component.html',
  styleUrl: './metric-cards.component.css'
})
export class MetricCardsComponent {
  cards: MetricCard[] = [
    {
      title: 'Total income',
      value: '$ 33,328.12',
      change: {
        value: '12.24%',
        isPositive: true
      }
    },
    {
      title: 'Profit',
      value: '$ 8,583.09',
      change: {
        value: '2.63%',
        isPositive: false
      }
    },
    {
      title: 'Total views',
      value: '52,234.32',
      change: {
        value: '1.46%',
        isPositive: true
      }
    },
    {
      title: 'Conversion rate',
      value: '6.12%',
      change: {
        value: '8.75%',
        isPositive: true
      }
    }
  ];
}
