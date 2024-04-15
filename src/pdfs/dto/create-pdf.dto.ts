import { IsDate, IsNotEmpty, IsString } from 'class-validator';

export class CreatePdfDto {
  @IsDate()
  @IsNotEmpty()
  date: Date | null;
  @IsString()
  @IsNotEmpty()
  name: string;
  @IsString()
  @IsNotEmpty()
  idNumber: string;
  @IsString()
  @IsNotEmpty()
  city: string;
  @IsString()
  @IsNotEmpty()
  address: string;
  @IsString()
  @IsNotEmpty()
  phone: string;
  @IsString()
  @IsNotEmpty()
  email: string;
  @IsString()
  @IsNotEmpty()
  passport: string;
  @IsString()
  @IsNotEmpty()
  purpose: string;
  @IsString()
  @IsNotEmpty()
  issued: string | undefined;
  @IsString()
  @IsNotEmpty()
  nombrePDF: string;
}
