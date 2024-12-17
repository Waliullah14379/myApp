import { Component, Input } from '@angular/core';

@Component({
  selector: 'code-snip',
  standalone: true,
  imports: [],
  templateUrl: './code-snip.component.html',
  styleUrl: './code-snip.component.scss'
})
export class CodeSnipComponent {
@Input() data:any ={
  title:'TypeScript Code Snippet',
  codeDescription:'TypeScript Code for Button Interaction',
  codeSnip:``
}

snippet = 
`function test(){
  console.log('Test');
}`
}
