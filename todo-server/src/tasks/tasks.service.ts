import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TaskEntity } from './entity/task.entity';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(TaskEntity)
    private tasksRepository: Repository<TaskEntity>,
  ) {}

  async findAll(): Promise<TaskEntity[]> {
    return this.tasksRepository.find();
  }

  async findOne(id: number): Promise<TaskEntity> {
    const found = await this.tasksRepository.findOneBy({ id });
    if (found === null) {
      throw new HttpException(
        `NotFound item with such id = ${id}`,
        HttpStatus.NOT_FOUND,
      );
    }
    return found;
  }

  async create(createTaskDto: CreateTaskDto): Promise<TaskEntity> {
    const task = new TaskEntity();
    task.title = createTaskDto.title;
    task.metadata = createTaskDto.metadata;
    return this.tasksRepository.save(task);
  }

  async update(id: number, updateTaskDto: UpdateTaskDto): Promise<TaskEntity> {
    const task = await this.tasksRepository.findOneBy({ id });
    if (task === null) {
      throw new HttpException(
        `NotFound item with such id = ${id}`,
        HttpStatus.NOT_FOUND,
      );
    }
    task.title = updateTaskDto.title;
    task.metadata = updateTaskDto.metadata;
    task.metadata = { ...task.metadata, ...updateTaskDto.metadata };
    return this.tasksRepository.save(task, { reload: true });
  }

  async deleteOne(id: number): Promise<{ message: string }> {
    const result = await this.tasksRepository.delete({ id });
    if (result.affected === 0) {
      throw new HttpException(
        `NotFound item with such id = ${id}`,
        HttpStatus.NOT_FOUND,
      );
    }
    return { message: `Task deleted successfully id = ${id}` };
  }

  async deleteAll(): Promise<{ message: string }> {
    await this.tasksRepository.clear();
    return { message: `ALL tasks deleted successfully` };
  }
}
