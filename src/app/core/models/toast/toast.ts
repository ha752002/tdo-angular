import {ToastType} from "../../../shared/enum/toast-type";

export class Toast {
  id?: string;
  type?: ToastType;
  message?: string;
  isFade?: boolean;

  constructor(init?:Partial<Toast>) {
    Object.assign(this, init);
  }
}

export class ToastOptions {
  id?: string;
}
