import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BansosValidationsService } from './bansos-validations.service';
import { CreateBansosValidationDto } from './dto/create-bansos-validation.dto';
import { UpdateBansosValidationDto } from './dto/update-bansos-validation.dto';

@Controller('bansos-validations')
export class BansosValidationsController {
  constructor(private readonly bansosValidationsService: BansosValidationsService) {}

  @Post()
  create(@Body() createBansosValidationDto: CreateBansosValidationDto) {
    return this.bansosValidationsService.create(createBansosValidationDto);
  }

  @Get()
  findAll() {
    return this.bansosValidationsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bansosValidationsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBansosValidationDto: UpdateBansosValidationDto) {
    return this.bansosValidationsService.update(id, updateBansosValidationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bansosValidationsService.remove(id);
  }
}
