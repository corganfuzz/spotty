import { Component, OnInit } from '@angular/core';
import {ServicesService} from '../../services/services.service';
import {Artist} from '../../../../Artist';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchStr: string;
  searchRes: Artist[];


  constructor(private _servicesService: ServicesService) {

   }

    searchMusic() {
     this._servicesService.searchMusic(this.searchStr).subscribe(res => {

       this.searchRes = res.results;
        console.log(this.searchRes[0]);
    });

  }

  ngOnInit() {
  }

}
