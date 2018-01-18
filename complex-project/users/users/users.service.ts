import { Injectable } from '@district/core';
import { Collection } from '@district/mongo';

import { User } from '../user.model';

@Injectable()
export class UsersService {

    constructor(
        @Collection('users') private usersCollection: Collection<User>
    ) { }

    getUsers() {
        return this.usersCollection.find().toArray();
    }

}
