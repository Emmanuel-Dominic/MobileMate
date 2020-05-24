import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { canEnterLoginPageGuard } from './can-enter-login-page.guard';

describe('canEnterLoginPageGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => canEnterLoginPageGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
