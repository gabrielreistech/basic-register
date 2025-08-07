import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertUpdateComponent } from './alert-update.component';

describe('AlertUpdateComponent', () => {
  let component: AlertUpdateComponent;
  let fixture: ComponentFixture<AlertUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlertUpdateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlertUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
