import { Component, OnInit, ViewChild } from '@angular/core';
import { Item } from 'src/app/models/Item';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  @ViewChild('f') form: HTMLFormElement;

  item: Item = {
    title: '',
    description: ''
  }

  constructor(private service: ItemService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.service.addItem(this.item);
    this.form.reset();
  }

}
