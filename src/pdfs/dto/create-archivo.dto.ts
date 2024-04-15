import { IsBase64, IsString } from 'class-validator';
export class CreateArchivosDto {
  @IsBase64()
  @IsString()
  foto: string;
  @IsString()
  @IsBase64()
  barcode: string;
  @IsString()
  @IsBase64()
  pdf: string;
  @IsString()
  nombre: string;
}
