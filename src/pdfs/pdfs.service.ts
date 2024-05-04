import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePdfDto } from './dto/create-pdf.dto';

import { Pdf } from './entities/pdf.entity';
import { writeFile } from 'fs/promises';
import { existsSync, mkdirSync } from 'fs';
import { CreateArchivosDto } from './dto/create-archivo.dto';

@Injectable()
export class PdfsService {
  constructor(@InjectRepository(Pdf) private pdfRepo: Repository<Pdf>) {}
  async create(createPdfDto: CreatePdfDto) {
    // const newPdf = this.pdfRepo.create(createPdfDto);
    // return await this.pdfRepo.save(newPdf);
    //console.log(await this.findByName(createPdfDto.nombrePDF));
    const existe = await this.pdfNombres(createPdfDto.nombrePDF);
    if (existe == true) return await this.findByName(createPdfDto.nombrePDF);
    const newPdf = this.pdfRepo.create(createPdfDto);
    return await this.pdfRepo.save(newPdf);
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
    const f = await this.pdfRepo.findOne({
      where: {
        nombrePDF,
      },
    });
    return f;
  }
  async pdfNombres(nombre: string) {
    try {
      const f = await this.pdfRepo.findOne({
        where: {
          nombrePDF: nombre,
        },
      });
      if (!f) {
        console.error('PDF no encontrado:', nombre);
        return false; // o manejar de otra forma según tus necesidades
      }
      return true;
    } catch (error) {
      console.error('Error al buscar el PDF:', error);
      throw error; // o manejar de otra forma según tus necesidades
    }
  }
  findOne(id: number) {
    return `This action returns a #${id} pdf`;
  }

  // update(id: number, updatePdfDto: UpdatePdfDto) {
  //   return `This action updates a #${id} pdf`;
  // }

  remove(id: number) {
    return `This action removes a #${id} pdf`;
  }
}

// Lee el contenido de la carpeta de manera síncrona
