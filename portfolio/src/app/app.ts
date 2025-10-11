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
  afficheDiv(div1:HTMLDivElement,div2:HTMLDivElement,div3:HTMLDivElement,btn1:HTMLButtonElement,btn2:HTMLButtonElement,btn3:HTMLButtonElement){
    div1.classList.remove('hidden')
    btn1.classList.add('bg-green-500/50')
    div2.classList.add('hidden')
    btn2.classList.remove('bg-green-500/50')
    div3.classList.add('hidden')
    btn3.classList.remove('bg-green-500/50')
  }
}
