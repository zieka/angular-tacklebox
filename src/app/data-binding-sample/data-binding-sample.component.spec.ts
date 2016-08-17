/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { DataBindingSampleComponent } from './data-binding-sample.component';

describe('Component: DataBindingSample', () => {
  it('should create an instance', () => {
    let component = new DataBindingSampleComponent();
    expect(component).toBeTruthy();
  });
});
