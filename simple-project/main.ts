import { District } from '@district/core';

import { AppModule } from './app.module';
import { config } from './config';

District
    .config(config)
    .bootstrap(AppModule);
