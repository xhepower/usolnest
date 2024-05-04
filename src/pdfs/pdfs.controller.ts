import { Controller, Get, Post, Body, Param, Res } from '@nestjs/common';
import { PdfsService } from './pdfs.service';
import { CreatePdfDto } from './dto/create-pdf.dto';
import { CreateArchivosDto } from './dto/create-archivo.dto';
import { join } from 'path';

@Controller('pdfs')
export class PdfsController {
  constructor(private readonly pdfsService: PdfsService) {}

  @Post()
  async create(@Body() createPdfDto: CreatePdfDto) {
    return await this.pdfsService.create(createPdfDto);
  }
  @Post('archivos')
  async subirArchivos(@Body() createArchivosDto: CreateArchivosDto) {
    return await this.pdfsService.createArchivos(createArchivosDto);
  }
  @Get('archivos/:nombre')
  async findbyname(@Param('nombre') nombre: string) {
    // return this.pdfsService.findAll();
    return await this.pdfsService.findByName(nombre);
  }
  @Get('existe/:nombre')
  async existeNombre(@Param('nombre') nombre: string) {
    // return this.pdfsService.findAll();
    return await this.pdfsService.pdfNombres(nombre);
  }
  @Get('photos/:nombre')
  photos(@Param('nombre') nombre: string, @Res() res) {
    // return this.pdfsService.findAll();
    res.sendFile(join(process.cwd(), 'photos', nombre + '.png'));
  }
  @Get('barcodes/:nombre')
  barcodes(@Param('nombre') nombre: string, @Res() res) {
    // return this.pdfsService.findAll();
    res.sendFile(join(process.cwd(), 'barcodes', nombre + '.png'));
  }
  @Get('docs/:nombre')
  docs(@Param('nombre') nombre: string, @Res() res) {
    // return this.pdfsService.findAll();
    res.sendFile(join(process.cwd(), 'pdfs', nombre + '.pdf'));
  }
  @Get()
  findAll() {
    return this.pdfsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pdfsService.findOne(+id);
  }
}
