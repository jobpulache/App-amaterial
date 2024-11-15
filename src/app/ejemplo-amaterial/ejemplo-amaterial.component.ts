import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDivider } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';


@Component({
  selector: 'app-ejemplo-amaterial',
  standalone: true,
  imports: [
    
    MatChipsModule,
    MatCardModule,
    MatButtonModule,  
    MatIconModule,
    MatDivider

  ],
  templateUrl: './ejemplo-amaterial.component.html',
  styleUrl: './ejemplo-amaterial.component.css'
})
export class EjemploAmaterialComponent {
longText: any;

}
