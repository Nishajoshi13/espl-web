import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndustryWeServeComponent } from './industry-we-serve.component';

describe('IndustryWeServeComponent', () => {
  let component: IndustryWeServeComponent;
  let fixture: ComponentFixture<IndustryWeServeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndustryWeServeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IndustryWeServeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
