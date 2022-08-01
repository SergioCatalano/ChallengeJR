import { Component, Input, OnInit } from '@angular/core';
import { DynamicDataService } from '../services/dynamic-data.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Input() data: string[] = [];
  @Input() trigger = "Trigger";
  @Input() isRootLevel = false;

  isLoading = false;
  dataLoaded = false;

  constructor(private database: DynamicDataService) {}

  ngOnInit(): void {
   
  }

  getData(node: string) {
    if (!this.dataLoaded) {
      this.isLoading = true;
      this.database.getChildren(node).subscribe((d) => {
        this.data = d?.slice() || [];
        this.isLoading = false;
        this.dataLoaded = true;
      });
    }
  }

  isExpandable(node: string) {
    return this.database.isExpandable(node);
  }
 
}
