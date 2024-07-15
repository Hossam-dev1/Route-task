import { AfterViewInit, Component, ViewChild, Input, OnInit, SimpleChanges } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule],
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})


export class FilterComponent implements OnInit {
  @Input() dataList: any;
  dataSource!: MatTableDataSource<any>;
  constructor() {

  }
  ngOnInit(): void {

  }
  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    if (changes['dataList'].currentValue) {
      this.dataSource = this.dataList;
    }

  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


}
