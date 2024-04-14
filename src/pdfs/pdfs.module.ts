import { Module } from '@nestjs/common';
import { PdfsService } from './pdfs.service';
import { PdfsController } from './pdfs.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pdf } from './entities/pdf.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Pdf])],
  controllers: [PdfsController],
  providers: [PdfsService],
  exports: [PdfsService],
})
export class PdfsModule {}
