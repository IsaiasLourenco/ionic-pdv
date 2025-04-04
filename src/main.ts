import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideIonicAngular } from '@ionic/angular/standalone';
<<<<<<< HEAD
import './icons'; // ou './icons' se estiver na raiz de src

=======
import './icons'; // ← Isso deve estar antes de bootstrapApplication
>>>>>>> 9b235abe4bdcb6a396e5e64ca9f33bc8d5898ab0

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideIonicAngular()
  ],
}).catch(err => console.error(err));
