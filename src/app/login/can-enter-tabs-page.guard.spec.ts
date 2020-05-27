import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { canEnterTabsPageGuard } from './can-enter-tabs-page.guard';

describe('canEnterTabsPageGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => canEnterTabsPageGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
