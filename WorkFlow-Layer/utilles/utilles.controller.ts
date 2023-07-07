import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { UtillesService } from './utilles.service';
import { CreateUtilleDto } from './dto/create-utille.dto';
import { UpdateUtilleDto } from './dto/update-utille.dto';

@Controller()
export class UtillesController {
  constructor(private readonly utillesService: UtillesService) {}

  @MessagePattern('createUtille')
  create(@Payload() createUtilleDto: CreateUtilleDto) {
    return this.utillesService.create(createUtilleDto);
  }

  @MessagePattern('findAllUtilles')
  findAll() {
    return this.utillesService.findAll();
  }

  @MessagePattern('findOneUtille')
  findOne(@Payload() id: number) {
    return this.utillesService.findOne(id);
  }

  @MessagePattern('updateUtille')
  update(@Payload() updateUtilleDto: UpdateUtilleDto) {
    return this.utillesService.update(updateUtilleDto.id, updateUtilleDto);
  }

  @MessagePattern('removeUtille')
  remove(@Payload() id: number) {
    return this.utillesService.remove(id);
  }
}
