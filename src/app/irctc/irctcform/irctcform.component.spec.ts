import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IrctcformComponent } from './irctcform.component';

describe('IrctcformComponent', () => {
  let component: IrctcformComponent;
  let fixture: ComponentFixture<IrctcformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IrctcformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IrctcformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
