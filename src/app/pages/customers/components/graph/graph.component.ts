import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, Input, OnInit, SimpleChanges } from '@angular/core';
import * as ApexCharts from 'apexcharts';
import { ApexOptions, NgApexchartsModule } from 'ng-apexcharts';

@Component({
  selector: 'app-graph',
  standalone: true,
  imports: [
    CommonModule,
    NgApexchartsModule,
  ],
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent {

  @Input() dataList: any[] = [];

  dataSet: any[] = [];
  datesList: string[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    const data = changes['dataList'].currentValue;
    if (data && data.length) {
      this.dataSet = data;
      this.datesList = this.dataSet.map((item: any) => item.date);
    }
  }
  chartOptions: any = {
    chart: {
      type: 'line',
      height: 350
    },
    series: [
      {
        name: 'Ahmed Ali',
        data: [
          1000,
          2000
        ],
      },
      {
        name: "Aya Elsayed",
        data: [
          550,
          1300
        ],
      },
      {
        name: "Sarah Reda",
        data: [
          500,
          1250
        ],
      },
      {
        name: "Mina Adel",
        data: [
          500,
          875
        ],
      },
      {
        name: "Ahmed Sayed",
        data: [
          1250,
          875
        ],
      },
    ],
    xaxis: {
      categories: [
        "2022-01-01",
        "2022-01-02",
        "2022-01-03",
        "2022-01-04",
        "2022-01-05"
      ]
    }
  };

  constructor() { }

  ngOnInit(): void {
  }




}
