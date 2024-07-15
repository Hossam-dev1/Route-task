import { Component, OnInit } from '@angular/core';
import { FilterComponent } from './components/filter/filter.component';
import { GraphComponent } from './components/graph/graph.component';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { CustomersService } from './services/customer.service';
import { CommonModule, DatePipe } from '@angular/common';

@Component({
  selector: 'app-customers',
  standalone: true,
  imports: [
    FilterComponent,
    GraphComponent,
    MatTableModule,
    CommonModule,
    DatePipe
  ],
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {
  // State
  displayedColumns: string[] = ['name', 'amount', 'date'];
  dataSource!: MatTableDataSource<any>
  dataList!: any[];

  constructor(private _cusomterService: CustomersService) {

  }
  ngOnInit(): void {
    this.getCombine()
  }
  log(param: any) {
    console.log(param);

  }
  getCombine() {
    this._cusomterService.mergeData().subscribe(((resp) => {
      this.dataList = resp;
      this.dataSource = new MatTableDataSource(this.dataList)

    }))
  }

}
