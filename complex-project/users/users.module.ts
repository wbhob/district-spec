import { DsModule } from '@district/core';
import { RouterModule } from '@district/router';

import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';

@DsModule({
    imports: [
        RouterModule.forChild([
            {
                path: '/',
                controller: UsersController
            }
        ])
    ],
    providers: [
        UsersService
    ]
})
export class UsersModule { }
