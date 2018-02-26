import { Component, OnInit } from '@angular/core';
import { FormatStrPipe } from '../../../shared/pipes/format-str.pipe';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {
  public textPipes = `	Lorem Ipsum is simply dummy text of the printing
                        and typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled
                        it to make a type specimen book.`;
  public Vietnamese = 'nguyễn đình của';
  public slicePipes = 'Trần Quốc Toản';
  public sliceArray = ['aaa', 'bbb', 'ccc', 123, 456];
  public numberPipes = 20.129545;
  public percentPipes = 0.1595;
  public currencyPipes = 20.19;
  public datePipes = new Date();
  public idFilter = '';
  public nameFilter = '';
  public priceFilter = '';
  public statusFilter = '';
  public user = [
    {
      id: 1,
      name: 'Nguyễn Lân Giang',
      age: 26
    },
    {
      id: 2,
      name: 'Nguyễn Bình An',
      age: 25
    }
  ];
  // sort col
  public sortBy = 'name';
  public sortValue = 1; // 1: asc, -1: desc
  public products = [
    {
      id: 1,
      name: 'Dell inspiron S10',
      price: 500,
      status: true
    },
    {
      id: 2,
      name: 'iPhone 7s',
      price: 700,
      status: false
    },
    {
      id: 3,
      name: 'Samsung galaxy s7',
      price: 600,
      status: false
    },
    {
      id: 4,
      name: 'Lenovo',
      price: 450,
      status: true
    },
    {
      id: 12,
      name: 'Smart Watch 500',
      price: 200,
      status: true
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  onSort(col) {
    this.sortBy = col;
    this.sortValue = -this.sortValue;
  }
}
