import { Injectable } from '@nestjs/common';
import { CreateUtilleDto } from './dto/create-utille.dto';
import { UpdateUtilleDto } from './dto/update-utille.dto';

@Injectable()
export class UtillesService {
  create(createUtilleDto: CreateUtilleDto) {
    return 'This action adds a new utille';
  }

  findAll() {
    return `This action returns all utilles`;
  }

  findOne(id: number) {
    return `This action returns a #${id} utille`;
  }

  update(id: number, updateUtilleDto: UpdateUtilleDto) {
    return `This action updates a #${id} utille`;
  }

  remove(id: number) {
    return `This action removes a #${id} utille`;
  }
}
