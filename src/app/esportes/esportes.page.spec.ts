import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EsportesPage } from './esportes.page';

describe('EsportesPage', () => {
  let component: EsportesPage;
  let fixture: ComponentFixture<EsportesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EsportesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EsportesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
