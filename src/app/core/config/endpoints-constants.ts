import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class EndpointsConstants {
  public static readonly API_ENDPOINT: string = environment.BASE_URL;
  // if you want to add more endpoints you can add them here
}
