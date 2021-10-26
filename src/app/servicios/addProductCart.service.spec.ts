/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AddProductCartService } from './addProductCart.service';

describe('Service: AddProductCart', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddProductCartService]
    });
  });

  it('should ...', inject([AddProductCartService], (service: AddProductCartService) => {
    expect(service).toBeTruthy();
  }));
});
