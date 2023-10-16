import { Component, ViewChild, OnInit, NO_ERRORS_SCHEMA } from '@angular/core';
import { DatePipe } from '@angular/common';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { flyMenuDirective } from './flyMenu.directive';
import { FlyListUseCase } from 'src/app/core/fly/flyList.usecase';
import { FlyInterface } from 'src/app/core/fly/fly.model';
import { first } from 'rxjs';

@Component({
  selector: 'app-onBoarding',
  templateUrl: './onBoarding.component.html',
  styleUrls: ['./onBoarding.component.scss'],
  standalone: true,
  schemas: [NO_ERRORS_SCHEMA],
  imports: [MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule, flyMenuDirective, DatePipe],
})
export class OnBoardingComponent implements OnInit {

  displayedColumns: string[] = ['id', 'travel', 'load', 'departure'];
  dataSource: MatTableDataSource<FlyInterface>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  flys: FlyInterface[];

  constructor(flyList: FlyListUseCase) {
    flyList.execute().pipe(first()).subscribe( (flyList: FlyInterface[]) => {
      this.flys = flyList;
    } );
  }
  
  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.flys);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}


