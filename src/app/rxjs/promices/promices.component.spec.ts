import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromicesComponent } from './promices.component';

describe('PromicesComponent', () => {
  let component: PromicesComponent;
  let fixture: ComponentFixture<PromicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PromicesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PromicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
