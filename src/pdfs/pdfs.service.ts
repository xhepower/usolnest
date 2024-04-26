import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Between, FindOptionsWhere } from 'typeorm';
import { CreatePdfDto } from './dto/create-pdf.dto';
import { UpdatePdfDto } from './dto/update-pdf.dto';
import { Pdf } from './entities/pdf.entity';
import { writeFile } from 'fs/promises';
import { existsSync, mkdirSync, readFileSync, readdirSync } from 'fs';
import { CreateArchivosDto } from './dto/create-archivo.dto';

@Injectable()
export class PdfsService {
  constructor(@InjectRepository(Pdf) private pdfRepo: Repository<Pdf>) {}
  async create(createPdfDto: CreatePdfDto) {
    const newPdf = this.pdfRepo.create(createPdfDto);
    return this.pdfRepo.save(newPdf);
  }
  async createArchivos(createArchivosDto: CreateArchivosDto) {
    const { foto, barcode, pdf, nombre } = createArchivosDto;
    const CARPETAS = ['pdfs', 'photos', 'barcodes', 'images'];
    CARPETAS.map((folderName) => {
      if (!existsSync(folderName)) {
        mkdirSync(folderName);
      }
    });
    try {
      await writeFile(`./photos/${nombre}.png`, foto, { encoding: 'base64' });
      await writeFile(`./pdfs/${nombre}.pdf`, pdf, { encoding: 'base64' });
      await writeFile(`./barcodes/${nombre}.png`, barcode, {
        encoding: 'base64',
      });
      return 'todo tumbado';
    } catch (error) {
      console.log(error);
      return error;
    }
  }
  async findAll() {
    const rta = await this.pdfRepo.find();

    return rta;
  }
  async findByName(nombrePDF: string) {
    return this.pdfRepo.findOne({ where: { nombrePDF } });
  }

  findOne(id: number) {
    return `This action returns a #${id} pdf`;
  }

  update(id: number, updatePdfDto: UpdatePdfDto) {
    return `This action updates a #${id} pdf`;
  }

  remove(id: number) {
    return `This action removes a #${id} pdf`;
  }
}

// Lee el contenido de la carpeta de manera síncrona
