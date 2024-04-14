export class CreatePdfDto {
  date: Date | null;
  name: string;
  idNumber: string;
  city: string;
  address: string;
  phone: string;
  email: string;
  passport: string;
  purpose: string;
  issued: string | undefined;
  nombrePDF: string;
}
