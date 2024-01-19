import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Toast} from "../../../core/models/toast/toast";
import {Subscription} from "rxjs";
import {ToastService} from "../../../core/services/toast-service/toast.service";
import {Router} from "@angular/router";
import {ToastType} from "../../enum/toast-type";

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})

export class ToastComponent implements OnInit, OnDestroy {
  @Input() id = 'default-toast';
  @Input() fade = true;
  toasts: Toast[] = [];
  toastSubscription!: Subscription;
  toastTypeClass = {
    [ToastType.SUCCESS]: 'alert-success',
    [ToastType.DANGER]: 'alert-danger',
    [ToastType.INFO]: 'alert-info',
    [ToastType.WARNING]: 'alert-warning'
  };

  constructor(private router: Router, private toastService: ToastService) {
  }

  ngOnInit() {
    this.toastSubscription = this.toastService.onToast(this.id)
      .subscribe(toast => {
        this.toasts.push(toast);
        setTimeout(() => this.removeToast(toast), 1500);
      });
  }

  ngOnDestroy() {
    this.toastSubscription.unsubscribe();
  }

  removeToast(toast: Toast) {
    if (!this.toasts.includes(toast)) return;
    const timeout = this.fade ? 250 : 0;
    toast.isFade = this.fade;
    setTimeout(() => {
      this.toasts = this.toasts.filter(x => x !== toast);
    }, timeout);
  }

  cssClass(toast: Toast) {
    if (!toast) return;
    const classes = ['alert', 'alert-dismissible'];
    if (toast.type !== undefined) {
      classes.push(this.toastTypeClass[toast.type]);
    }

    if (toast.isFade) {
      classes.push('fade');
    }

    return classes.join(' ');
  }
}
