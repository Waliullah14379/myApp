import { AfterViewInit, Component, OnInit } from '@angular/core';
import { CodeSnipComponent } from '../../shared/code-snip/code-snip.component';
import { interval, Subscription, timer } from 'rxjs';
import { CreateElementService } from '../../services/create-element.service';

@Component({
  selector: 'app-interval-timer',
  standalone: true,
  imports: [CodeSnipComponent],
  templateUrl: './interval-timer.component.html',
  styleUrl: './interval-timer.component.scss'
})
export class IntervalTimerComponent implements OnInit,AfterViewInit {
  typescriptSnip ={
    title:'TypeScript Code Snippet',
    codeDescription:'TypeScript Code for Button Interaction',
    codeSnip:`console.log('asdasdasd)`
  }
  htmlSnip ={
    title:'HTML Code Snippet',
    codeDescription:'HTML Code for Button Interaction',
    codeSnip:`<h1>Test</h1>`
  }
  intervalSubscription!: Subscription;
  timerSubscription!: Subscription;
  constructor(public _createElement:CreateElementService){}
  ngOnInit(): void {
    const intervalData = interval(1000);
    this.intervalSubscription = intervalData.subscribe((res:any)=>{
      this._createElement.createList('intervalList',res)
      if(res >= 4 ){
        this.intervalSubscription.unsubscribe()
      }
    })

    const timerData = timer(5000,1000)
    this.timerSubscription = timerData.subscribe((res:any)=>{      
      this._createElement.createList('timerElement',res)
      if(res >= 4 ){
        this.timerSubscription.unsubscribe()
      }
    })
  }
  ngAfterViewInit(): void {
    
  }
}
