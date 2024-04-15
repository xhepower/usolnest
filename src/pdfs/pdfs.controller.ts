import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PdfsService } from './pdfs.service';
import { CreatePdfDto } from './dto/create-pdf.dto';
import { UpdatePdfDto } from './dto/update-pdf.dto';
import { CreateArchivosDto } from './dto/create-archivo.dto';

@Controller('pdfs')
export class PdfsController {
  constructor(private readonly pdfsService: PdfsService) {}

  @Post()
  create(@Body() createPdfDto: CreatePdfDto) {
    return this.pdfsService.create(createPdfDto);
  }
  @Post('archivos')
  subirArchivos(@Body() createArchivosDto: CreateArchivosDto) {
    return this.pdfsService.createArchivos(createArchivosDto);
  }
  @Get()
  findAll() {
    return this.pdfsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pdfsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePdfDto: UpdatePdfDto) {
    return this.pdfsService.update(+id, updatePdfDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pdfsService.remove(+id);
  }
}
