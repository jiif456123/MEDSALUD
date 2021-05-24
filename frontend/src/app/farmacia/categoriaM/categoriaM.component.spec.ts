import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaMComponent } from './categoriaM.component';

describe('CategoriaMComponent', () => {
  let component: CategoriaMComponent;
  let fixture: ComponentFixture<CategoriaMComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriaMComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriaMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


/* tslint:disable:no-unused-variable */
/*
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CategoriaMComponent } from './categoriaM.component';

describe('CategoriaMComponent', () => {
  let component: CategoriaMComponent;
  let fixture: ComponentFixture<CategoriaMComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriaMComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriaMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
*/