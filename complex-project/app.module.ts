import { DsModule } from '@district/core';
import { RouterModule } from '@district/router';

import { UsersModule } from './users/users.module';

@DsModule({
    imports: [
        RouterModule.forRoot([{
            path: '/users',
            loadModule: UsersModule
        }])
    ],
})
export class AppModule { }
