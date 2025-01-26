import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DarkModeService {
  private darkModeSubject = new BehaviorSubject<boolean>(false); 
  darkMode$ = this.darkModeSubject.asObservable();

  constructor() {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    this.darkModeSubject.next(isDarkMode);
    this.applyTheme(isDarkMode);
  }

  toggleDarkMode() {
    const isDarkMode = !this.darkModeSubject.value;
    this.darkModeSubject.next(isDarkMode);
    localStorage.setItem('darkMode', isDarkMode.toString());
    this.applyTheme(isDarkMode);
  }

  private applyTheme(isDarkMode: boolean) {
    if (isDarkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }
}
