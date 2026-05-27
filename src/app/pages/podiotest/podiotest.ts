import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-podiotest',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './podiotest.html',
  styleUrl: './podiotest.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Podiotest {
  
}
