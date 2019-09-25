import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonfabPage } from './botonfab.page';

describe('BotonfabPage', () => {
  let component: BotonfabPage;
  let fixture: ComponentFixture<BotonfabPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotonfabPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotonfabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
