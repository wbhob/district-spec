import { DsModule } from '@district/core';

import { UsersModule } from './users/users.module';

@DsModule({
    imports: [
        UsersModule
    ]
})
export class AppModule { }
