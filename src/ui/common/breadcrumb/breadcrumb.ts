import { CommonModule } from '@angular/common';
import { Component, input, InputSignal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BreadcrumbItem } from '@core/common/domain/breadcrumb';

@Component({
  selector: 'app-breadcrumb',
  imports: [CommonModule, RouterModule],
  templateUrl: './breadcrumb.html',
  styleUrl: './breadcrumb.scss',
})
export class Breadcrumb {
  /**
   * Items à afficher dans le breadcrumb
   */
  public items: InputSignal<BreadcrumbItem[]> = input<BreadcrumbItem[]>([]);
}
