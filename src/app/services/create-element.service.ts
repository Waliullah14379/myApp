import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class CreateElementService {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  createList(ID: any, DATA: any) {
    if (isPlatformBrowser(this.platformId)) { 

      let el = document.createElement('li');
      el.innerText = DATA;
      document.getElementById(ID)?.appendChild(el)
    }
  }
}
