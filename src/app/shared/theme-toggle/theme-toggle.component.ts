import { Component, inject } from '@angular/core';
import { ThemeService } from '../../core/services/theme.service';

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  template: `
    <label class="switch" aria-label="Cambiar tema">
      <input type="checkbox" [checked]="theme.isDark()" (change)="theme.toggle()" />
      <span class="slider"></span>
    </label>
  `,
  styles: [
    `
      :host {
        display: inline-flex;
        align-items: center;
      }

      /* From Uiverse.io by satyamchaudharydev */
      /* The switch - the box around the slider */
      .switch {
        display: block;
        --width-of-switch: 3.5em;
        --height-of-switch: 2em;
        /* size of sliding icon -- sun and moon */
        --size-of-icon: 1.4em;
        /* it is like a inline-padding of switch */
        --slider-offset: 0.3em;
        position: relative;
        width: var(--width-of-switch);
        height: var(--height-of-switch);
      }

      /* Hide default HTML checkbox */
      .switch input {
        opacity: 0;
        width: 0;
        height: 0;
      }

      /* The slider */
      .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #f4f4f5;
        transition: 0.4s;
        border-radius: 30px;
      }

      :host-context(.light-theme) .slider {
        box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.35);
      }

      .slider:before {
        position: absolute;
        content: '';
        height: var(--size-of-icon, 1.4em);
        width: var(--size-of-icon, 1.4em);
        border-radius: 20px;
        left: var(--slider-offset, 0.3em);
        top: 50%;
        transform: translateY(-50%);
        background: linear-gradient(40deg, #fbfb00, #ff6f00 70%);
        transition: 0.4s;
      }

      input:checked + .slider {
        background-color: #303136;
      }

      input:checked + .slider:before {
        left: calc(
          100% - (var(--size-of-icon, 1.4em) + var(--slider-offset, 0.3em))
        );
        background: #303136;
        /* change the value of second inset in box-shadow to change the angle and direction of the moon  */
        box-shadow:
          inset -0.22em -0.14em 0.36em -0.14em #8983f7,
          inset -0.72em -0.28em 0 0 #a3dafb;
      }

      @media (max-width: 600px) {
        .switch {
          font-size: 12px;
          --size-of-icon: 1.3em;
          --slider-offset: 0.25em;
        }
      }
    `,
  ],
})
export class ThemeToggleComponent {
  readonly theme = inject(ThemeService);
}

