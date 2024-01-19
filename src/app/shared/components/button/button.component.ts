import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ColorType} from "../../enum/color-type";

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() title : string = 'button';
  @Input() type: ColorType = ColorType.PRIMARY;
  @Input() buttonStyle : object = {
    padding :' 10px 20px'
  };
  @Input() isDisable: boolean = false;

  constructor() {}
}
