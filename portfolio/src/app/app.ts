import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit{
  protected readonly title = signal('portfolio');
  ngOnInit(): void {

  }
  afficheDiv(div1:HTMLDivElement,div2:HTMLDivElement,div3:HTMLDivElement){
    div1.toggleAttribute('Hidden')
  }
}
