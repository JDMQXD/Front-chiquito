import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfazComunComponent } from './interfaz-comun.component';

describe('InterfazComunComponent', () => {
  let component: InterfazComunComponent;
  let fixture: ComponentFixture<InterfazComunComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InterfazComunComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterfazComunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
