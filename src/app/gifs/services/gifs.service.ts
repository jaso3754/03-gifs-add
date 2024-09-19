import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { log } from 'console';

@Injectable({providedIn: 'root'})
export class GifsService {


private _tagsHistory: string[] = [];
private apiKey: string = 'FJTf1xHmJ1nOcuF3tbUSa7FXKDn6205R';

  constructor( private http: HttpClient) { }

  get tagsHistory () {
    return [...this._tagsHistory];
  }

private organizeHistory (tag: string ) {
  tag = tag.toLowerCase();

  if ( this._tagsHistory.includes (tag) ) {
    this._tagsHistory = this._tagsHistory.filter ( (oldTag) => oldTag !== tag)
  }
  this._tagsHistory.unshift( tag );
  this._tagsHistory = this.tagsHistory.splice(0,10);
}

   searchTag ( tag:string ): void {

    if (tag.length === 0 ) return;
    this.organizeHistory( tag );

    this.http.get('api.giphy.com/v1/gifs/search?api_key=FJTf1xHmJ1nOcuF3tbUSa7FXKDn6205R&q=Valorant&limit=10')
      .subscribe( resp => {


        console.log(resp);

      });


  }


}
