import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from '@config/app.config';
import { App } from '@ui/app';

bootstrapApplication(App, appConfig).catch((err: Error) => console.error(err));
