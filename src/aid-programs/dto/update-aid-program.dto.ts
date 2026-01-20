import { PartialType } from '@nestjs/mapped-types';
import { CreateAidProgramDto } from './create-aid-program.dto';

export class UpdateAidProgramDto extends PartialType(CreateAidProgramDto) {}
