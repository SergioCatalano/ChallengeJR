import { Component } from '@angular/core';
import { DynamicDataService } from './services/dynamic-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'challengejr';
  initialData: string[] = [];

  constructor(private data: DynamicDataService) {
    this.initialData = this.data.firstLevel.slice();
  }

}
