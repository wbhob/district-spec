import { Controller, Get } from '@district/core';

import { UsersService } from './users.service';

@Controller(/* optional path string or RegExp */)
export class UsersController {
    constructor(
        public usersService: UsersService
    ) { }

    @Get(/* optional path string or RegExp */)
    async getAllUsers() {
        return await this.usersService.getUsers();
    }

}
