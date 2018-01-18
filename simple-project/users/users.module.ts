import { DsModule } from '@district/core';

import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';

@DsModule({
    controllers: [
        UsersController
    ],
    providers: [
        UsersService
    ],
    path: '/users' /* string or regexp */
})
export class UsersModule { }
