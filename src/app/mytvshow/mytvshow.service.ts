import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { IShowInfo } from '../ishow-info';
import { map } from 'rxjs/operators';

// words here match words in TVMaze API
interface Ishowinfodata {
  show: {
    name: string;
    genres: string[];
  };
  country: {
    name: string;
  };
  image: {
    medium: string;
  };
  summary: string;
}

@Injectable({
  providedIn: "root"
})
export class MytvshowService {
  //Angular's HttpClient gives back observable data
  constructor(private httpClient: HttpClient) {}

  //map() takes observable data and passes it to transform function
  getmytvshow(show: string) {
    return this.httpClient.get<Ishowinfodata>(
      `${environment.baseUrl}api.tvmaze.com/search/shows?q=${show}`
    ).pipe(
      map(data => this.transformToIShowInfo(data))
    );
  }

  //Data Transformation--input is Ishowinfodata, output is IShowInfo
  private transformToIShowInfo(data: Ishowinfodata) : IShowInfo{
    return {
      name: data.show.name,
      genre: data.show.genres[0],
      country: data.country.name,
      summary: data.summary,
      image: data.image.medium
    }
  }
}
