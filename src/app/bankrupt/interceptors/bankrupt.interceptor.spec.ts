import { TestBed } from '@angular/core/testing';

import { BankruptInterceptor } from './bankrupt.interceptor';

describe('BankruptInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      BankruptInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: BankruptInterceptor = TestBed.inject(BankruptInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
