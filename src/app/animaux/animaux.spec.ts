import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Animaux } from './animaux';

describe('Animaux', () => {
  let component: Animaux;
  let fixture: ComponentFixture<Animaux>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Animaux],
    }).compileComponents();

    fixture = TestBed.createComponent(Animaux);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
