import { CommonModule } from '@angular/common';
import { Component, input, InputSignal } from '@angular/core';

@Component({
  selector: 'app-loading-state',
  imports: [CommonModule],
  templateUrl: './loading-state.html',
  styleUrl: './loading-state.scss',
})
export class LoadingState {
  /**
   * Message à afficher dans l'état de chargement
   */
  public message: InputSignal<string> = input<string>('Loading...');
}
