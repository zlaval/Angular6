import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();


  constructor() {
  }

  ngOnInit() {
  }

  onAddItem() {
    let ingredientName = this.nameInputRef.nativeElement.value;
    let ingredientAmount = this.amountInputRef.nativeElement.value;
    const ingredient = new Ingredient(ingredientName, ingredientAmount)
    this.ingredientAdded.emit(ingredient)
  }
}
