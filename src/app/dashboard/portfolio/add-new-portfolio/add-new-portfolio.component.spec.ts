import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewPortfolioComponent } from './add-new-portfolio.component';

describe('AddNewPortfolioComponent', () => {
  let component: AddNewPortfolioComponent;
  let fixture: ComponentFixture<AddNewPortfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewPortfolioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddNewPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
