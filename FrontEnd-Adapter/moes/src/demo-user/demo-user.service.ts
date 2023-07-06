import { Injectable } from '@nestjs/common';
import { CreateDemoUserDto } from './dto/create-demo-user.dto';
import { UpdateDemoUserDto } from './dto/update-demo-user.dto';

@Injectable()
export class DemoUserService {
  create(createDemoUserDto: CreateDemoUserDto) {
    return 'This action adds a new demoUser';
  }

  findAll() {
    return `This action returns all demoUser`;
  }

  findOne(id: number) {
    return `This action returns a #${id} demoUser`;
  }

  update(id: number, updateDemoUserDto: UpdateDemoUserDto) {
    return `This action updates a #${id} demoUser`;
  }

  remove(id: number) {
    return `This action removes a #${id} demoUser`;
  }
}
