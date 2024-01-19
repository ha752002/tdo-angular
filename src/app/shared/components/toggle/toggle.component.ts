import {Component, EventEmitter, HostBinding, Input, Output} from '@angular/core';
import {ColorType} from "../../enum/color-type";

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss'],
  standalone: true,
})
export class ToggleComponent {
  @HostBinding('class.toggle-checked') @Input() checked = false;
  @HostBinding('class.toggle-disabled') @Input() disabled = false;
  @Output() checkedChange = new EventEmitter();
  @Input() disableTitle: string = "Disable";
  @Input() activeTitle: string = "Active";
  @Input() toggleStyle: object = {
    background: ColorType.PRIMARY,
  };

  constructor() {
  }

  get title() {
    return this.checked ? this.activeTitle : this.disableTitle;
  }

  onToggleChange() {
    this.checked = !this.checked;
    this.checkedChange.emit(this.checked);
  }

}
