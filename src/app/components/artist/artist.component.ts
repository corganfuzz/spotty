import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Artist } from '../../../../Artist';
import { Album } from '../../../../Album';
import { ServicesService } from '../../services/services.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {
  id: string;
  artist: Artist[];
  albums: Album[];

  constructor(
    private _servicesService: ServicesService,
    private _route: ActivatedRoute) {

  }

  ngOnInit() {
    this._route.params
      .map(params => params['id'])
      .subscribe((id) => {
        this._servicesService.getArtist2(id)
          .subscribe(artist => {
            console.log(artist);
            // this.artist = artist;

          })

        this._servicesService.getAlbums(id)
          .subscribe(albums => {
            console.log(albums)
            // this.albums = albums.items;
          })

      });
  }

}
