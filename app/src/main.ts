import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { setDefaults as setDefaultsToast } from 'bulma-toast';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

setDefaultsToast({
  position: 'top-center',
  type: 'is-success',
  animate: { in: 'fadeIn', out: 'fadeOut' },
  dismissible: true,
});

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
