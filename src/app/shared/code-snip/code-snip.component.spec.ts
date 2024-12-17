import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeSnipComponent } from './code-snip.component';

describe('CodeSnipComponent', () => {
  let component: CodeSnipComponent;
  let fixture: ComponentFixture<CodeSnipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CodeSnipComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CodeSnipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
