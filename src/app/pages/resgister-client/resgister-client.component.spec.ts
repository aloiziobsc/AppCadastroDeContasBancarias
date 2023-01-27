import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResgisterClientComponent } from './resgister-client.component';

describe('ResgisterClientComponent', () => {
  let component: ResgisterClientComponent;
  let fixture: ComponentFixture<ResgisterClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResgisterClientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResgisterClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
