import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/Item';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  items: Item[];
  editState: boolean;
  moreInfo: boolean;
  currentItem: Item;

  constructor(private service: ItemService) { }

  ngOnInit(): void {
    this.service.getItems().subscribe(items => {
      this.items = items;
    })
  }

  deleteItem(item: Item) {
    if (!confirm(`Are you sure you want to delete "${item.title}"?`))
      return;

    this.service.deleteItem(item);
  }

  editItem(item: Item) {
    if (this.editState)
      this.editState = false
    else
      this.editState = true;

    this.currentItem = item;
    this.moreInfo = false;
  }

  updateItem(item: Item) {
    this.service.updateItem(item);
    this.editState = false;
  }

  more(item: Item) {
  if (this.moreInfo)
    this.moreInfo = false
  else
    this.moreInfo = true;

  this.currentItem = item;
  this.editState = false;
  }
}
