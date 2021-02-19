import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { LoaderState } from 'src/app/presentation/common/components/loader/LoaderState';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  constructor() { }
  private loaderSubject = new Subject<LoaderState>();
  loaderState = this.loaderSubject.asObservable();
  show() {
    this.loaderSubject.next(<LoaderState>{ show: true });
  }
  hide() {
    this.loaderSubject.next(<LoaderState>{ show: false });
  }
}
