import { Component, Input } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'card-recipe',
  standalone: true,
  imports: [RouterLinkWithHref],
  templateUrl: './recipe-card.component.html',
  styleUrl: './recipe-card.component.css',
})
export class RecipeCardComponent {
  @Input() id = '';
  @Input() title = ``;
  @Input() img = ``;
  @Input() cooking = '';
  @Input() preparation = '';
  @Input() total = '';
}
