/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LocalstoreService } from './localstore.service';

describe('Service: Localstore', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LocalstoreService]
    });
  });

  it('should ...', inject([LocalstoreService], (service: LocalstoreService) => {
    expect(service).toBeTruthy();
  }));
});
