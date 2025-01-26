import { Body, Controller, Get, Post } from '@nestjs/common';
import { TodoService } from './todo.service';
import { get } from 'http';

@Controller('todo')
export class TodoController {

    constructor(private readonly todoService: TodoService) {

    }


    @Post("/create")
    createTodo(@Body() body) {
        return body;
    }

    @Get("/alltodos")
    allTodos() {
        return this.todoService.getTodos();
    }
}
