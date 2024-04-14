import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Between, FindOptionsWhere } from 'typeorm';
import { CreatePdfDto } from './dto/create-pdf.dto';
import { UpdatePdfDto } from './dto/update-pdf.dto';
import { Pdf } from './entities/pdf.entity';

@Injectable()
export class PdfsService {
  constructor(@InjectRepository(Pdf) private pdfRepo: Repository<Pdf>) {}
  async create(createPdfDto: CreatePdfDto) {
    const newPdf = this.pdfRepo.create(createPdfDto);
    return this.pdfRepo.save(newPdf);
  }

  async findAll() {
    const rta = await this.pdfRepo.find();

    return rta;
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
