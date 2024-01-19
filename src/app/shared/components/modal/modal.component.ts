import {Component, ElementRef, Input, OnDestroy, OnInit, Renderer2} from '@angular/core';
import { ModalService } from "../../../core/services/modal-service/modal.service";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  standalone: true,
})

export class ModalComponent implements OnInit, OnDestroy{
  @Input() key: string = '';
  private readonly element: HTMLElement;

  constructor(private modalService: ModalService, private el: ElementRef, private renderer: Renderer2) {
    this.element = el.nativeElement;
    this.renderer.setStyle(this.element, 'display', 'none');
  }

  ngOnInit(): void {
    this.modalService.addToModalList(this);
    this.renderer.appendChild(document.body, this.element);
    this.renderer.listen(this.element, 'click', (event: MouseEvent) => {
      if ((event.target as HTMLElement).className === 'app-modal') {
        this.close();
      }
    });
  }

  open() {
    this.renderer.setStyle(this.element, 'display', 'block');
    this.renderer.addClass(document.body, 'app-modal-open');
  }

  close() {
    this.renderer.setStyle(this.element, 'display', 'none');
    this.renderer.removeClass(document.body, 'app-modal-open');
  }

  ngOnDestroy(): void {
    this.modalService.removeFromModalList(this);
    this.element.remove();
  }
}
