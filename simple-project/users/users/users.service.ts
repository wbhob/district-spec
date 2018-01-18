import { Injectable } from '@district/core';

@Injectable()
export class UsersService {

    getUsers() {
        return [{
            name: 'Timothy'
        }]
    }

}
