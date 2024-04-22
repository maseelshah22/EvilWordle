import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordsGameComponent } from './words-game.component';

describe('WordsGameComponent', () => {
  let component: WordsGameComponent;
  let fixture: ComponentFixture<WordsGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WordsGameComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WordsGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
