import { Injectable } from '@district/core';
import { Collection } from '@district/mongo';

import { User } from '../user.model';

@Injectable()
export class UsersService {

    constructor(
        @Collection('users') private usersCollection: Collection<User>
        // this is OK because functions and interfaces can't be confused by TS: one is only a value, and the other is only a type
    ) { }

    getUsers() {
        return this.usersCollection.find().toArray();
    }

}
