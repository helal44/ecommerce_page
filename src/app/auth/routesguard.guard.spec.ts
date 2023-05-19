import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { routesguardGuard } from './routesguard.guard';

describe('routesguardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => routesguardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
