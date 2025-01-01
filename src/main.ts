import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router'; // Import provideRouter to define the routes
import { AppComponent } from './app/app.component'; // Import your AppComponent
import { HomeComponent } from './app/features/home/home.component';

const routes = [
  { path: '', component: HomeComponent },
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes)
  ]
})
  .catch(err => console.error(err));
