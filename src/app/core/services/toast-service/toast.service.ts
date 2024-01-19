import {Injectable} from '@angular/core';
import {filter, Observable, Subject} from "rxjs";
import {Toast, ToastOptions} from "../../models/toast/toast";
import {ToastType} from "../../../shared/enum/toast-type";

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  private subject$ = new Subject<Toast>();
  private defaultId = 'default-toast';

  // enable subscribing to toasts observable
  onToast(id = this.defaultId): Observable<Toast> {
    return this.subject$.asObservable().pipe(filter(x => x && x.id === id));
  }

  // main toast method
  toast(toast: Toast) {
    toast.id = toast.id || this.defaultId;
    this.subject$.next(toast);
  }

  // convenience methods
  success(message: string, options?: ToastOptions) {
    this.toast(new Toast({...options, type: ToastType.SUCCESS, message}));
  }

  error(message: string, options?: ToastOptions) {
    this.toast(new Toast({...options, type: ToastType.DANGER, message}));
  }

  info(message: string, options?: ToastOptions) {
    this.toast(new Toast({...options, type: ToastType.INFO, message}));
  }

  warn(message: string, options?: ToastOptions) {
    this.toast(new Toast({...options, type: ToastType.WARNING, message}));
  }

  // clear toasts
  clear(id = this.defaultId) {
    this.subject$.next(new Toast({id}));
  }
}
