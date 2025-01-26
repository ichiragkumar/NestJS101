import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from '../app.service'; 
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {

  constructor(
    private readonly appService: AppService,
    private readonly todoService: TodoService

) {}

  @Get('/alltodos')
  getTodos(): string {
    return this.appService.getData();
  }

  @Get('/notes')
  getNotes(): string {
    return 'All notes';
  }

  @Get("/gettodods")
  getTodods(): Object {
    return this.todoService.getTodos();
  }


  @Post('/add')
  addTodo(@Body() userData : {name: string, email:string}): Object {
    return this.todoService.createTodo(userData);
  }
}
