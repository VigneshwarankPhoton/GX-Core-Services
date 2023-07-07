import { PartialType } from '@nestjs/mapped-types';
import { CreateUtilleDto } from './create-utille.dto';

export class UpdateUtilleDto extends PartialType(CreateUtilleDto) {
  id: number;
}
