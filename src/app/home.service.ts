import { User } from './../inter';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor() {}
  friends: string[] = ['ahmed', 'amr ', 'hello'];
}
