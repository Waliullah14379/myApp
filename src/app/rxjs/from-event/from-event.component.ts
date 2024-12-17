import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CodeSnipComponent } from '../../shared/code-snip/code-snip.component';
import { fromEvent } from 'rxjs';
import { CreateElementService } from '../../services/create-element.service';

@Component({
  selector: 'app-from-event',
  standalone: true,
  imports: [CodeSnipComponent],
  templateUrl: './from-event.component.html',
  styleUrl: './from-event.component.scss'
})
export class FromEventComponent implements OnInit, AfterViewInit {

  @ViewChild('addBtn') addBtn!: ElementRef;

  typescriptSnip = {
    title: 'TypeScript Code Snippet',
    codeDescription: 'TypeScript Code for Button Interaction',
    codeSnip: `console.log('asdasdasd)`
  }
  htmlSnip = {
    title: 'HTML Code Snippet',
    codeDescription: 'HTML Code for Button Interaction',
    codeSnip: `<h1>Test</h1>`
  }

  constructor(public _createelement:CreateElementService) { }
  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    let count = 1
    fromEvent(this.addBtn.nativeElement, 'click').subscribe((res: any) => {
      console.log(res);
      this._createelement.createList('elContainer','Data' + count++)
    })
  }
}
