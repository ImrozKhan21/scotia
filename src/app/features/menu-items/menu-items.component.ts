import {Component, OnInit, Input} from '@angular/core';
import {MenuItems} from '../../models/menu.constants';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-menu-items',
  templateUrl: './menu-items.component.html',
  styleUrls: ['./menu-items.component.scss']
})
export class MenuItemsComponent implements OnInit {
  menuItems = MenuItems.categorys;
  selectedCategory: string;
  filteredItems = MenuItems.categorys;
  @Input() onlyAppetizer: boolean;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.selectedCategory = params ? params.item : null;
      this.filteredItems = this.selectedCategory || this.onlyAppetizer ? this.getFilteredItems() : this.menuItems;
    });
  }

  getFilteredItems() {
    const appetizersIds = ['26576', '26582', '26579'];
    return this.menuItems.filter((item) => {
      return this.selectedCategory === 'appetizer' || this.onlyAppetizer ? appetizersIds.indexOf(item.id) > -1
        : appetizersIds.indexOf(item.id) === -1;
    });
  }

}
