import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
   const userRole = localStorage.getItem('userRole');
   const url=state.url;
   if((userRole=='Registration Secretary'&&url=='/registrationForm')||(userRole=='Gym Teacher'&&url=='/lessonsList'))
  return true;
return false;
};
