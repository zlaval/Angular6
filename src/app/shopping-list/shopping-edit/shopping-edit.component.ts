import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list.service";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;

  constructor(private shoppingListService: ShoppingListService) {
  }

  ngOnInit() {
  }

  onAddItem() {
    let ingredientName = this.nameInputRef.nativeElement.value;
    let ingredientAmount = this.amountInputRef.nativeElement.value;
    const ingredient = new Ingredient(ingredientName, ingredientAmount);
    this.shoppingListService.addIngredient(ingredient);
  }
}
