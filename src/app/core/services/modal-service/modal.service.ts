import {Injectable} from '@angular/core';
import {ModalComponent} from "../../../shared/components/modal/modal.component";

@Injectable({
  providedIn: 'root'
})

export class ModalService {
  private modals: ModalComponent[] = [];

  addToModalList(modal: ModalComponent) {
    if (!modal.key || this.modals.find(x => x.key === modal.key)) {
      throw new Error('modal must have a unique id attribute');
    }
    this.modals.push(modal);
  }

  removeFromModalList(modal: ModalComponent) {
    // remove modal from array of active modals
    this.modals = this.modals.filter(x => x === modal);
  }

  openModalByKey(key: string) {
    // open modal specified by id
    const modal = this.modals.find(x => x.key === key);
    if (!modal) {
      throw new Error(`modal '${key}' not found`);
    }
    modal.open();
  }

  closeModalByKey(key: string) {
    const modal = this.modals.find(x => x.key === key);

    if (!modal) {
      throw new Error(`modal '${key}' not found`);
    }
    modal.close();
  }

  constructor() {
  }
}
