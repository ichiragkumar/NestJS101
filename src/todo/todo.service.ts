import { Get, Injectable } from '@nestjs/common';

@Injectable()
export class TodoService {


    getTodos():String {
        return "Hello World! from todod";
    }
}
