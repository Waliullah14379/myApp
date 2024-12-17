import { Component, OnInit } from '@angular/core';
import { CodeSnipComponent } from '../../shared/code-snip/code-snip.component';
import { CreateElementService } from '../../services/create-element.service';
import { from, of } from 'rxjs';

@Component({
  selector: 'app-of-from',
  standalone: true,
  imports: [CodeSnipComponent],
  templateUrl: './of-from.component.html',
  styleUrl: './of-from.component.scss'
})
export class OfFromComponent implements OnInit{
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
  constructor(public createElement:CreateElementService){}
  ngOnInit(): void {

    //of
    const ofData = of('Waliullah','Asad','Adil') // here we can pas anything as an argument   objects, array etc
    ofData.subscribe((res:any)=>{
      this.createElement.createList('OfList',res);
    })

    // from
    const fromData = from(['Waliullah','Asad','Adil',{"a":"dadadas","sdasdasd":"asdasdasdasdsa"}])
    fromData.subscribe((res)=>{
      // console.log(res);
      this.createElement.createList('FromList',res);
    }) 

    //from promise
    const promise = new Promise((resolve=>{
      setTimeout(()=>{
        resolve('Promise resolve')
      },2000)
    }))

    // const promiseFrom = from(promise)
    // promiseFrom.subscribe((res)=>{
    //   console.log('promise-------->',res);
    //   // this.createElement.createList('FromList',res);
    // }) 
    // promise.then((res)=>{
    //   console.log(res);
    // })
  }
}
