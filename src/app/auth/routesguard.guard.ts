import { CanActivateFn } from '@angular/router';

export const routesguardGuard: CanActivateFn = (route, state) => {
  return false;
};
