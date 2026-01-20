import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AidProgramsService } from './aid-programs.service';
import { CreateAidProgramDto } from './dto/create-aid-program.dto';
import { UpdateAidProgramDto } from './dto/update-aid-program.dto';

@Controller('aid-programs')
export class AidProgramsController {
  constructor(private readonly aidProgramsService: AidProgramsService) {}

  @Post()
  create(@Body() createAidProgramDto: CreateAidProgramDto) {
    return this.aidProgramsService.create(createAidProgramDto);
  }

  @Get()
  findAll() {
    return this.aidProgramsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.aidProgramsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAidProgramDto: UpdateAidProgramDto) {
    return this.aidProgramsService.update(id, updateAidProgramDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.aidProgramsService.remove(id);
  }
}
