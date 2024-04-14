import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';
@Entity()
export class Pdf {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ type: 'date' })
  date: Date | null;
  @Column({ type: 'varchar', length: 255 })
  name: string;
  @Column({ type: 'varchar', length: 255 })
  idNumber: string;
  @Column({ type: 'varchar', length: 255 })
  city: string;
  @Column({ type: 'varchar', length: 255 })
  address: string;
  @Column({ type: 'varchar', length: 255 })
  phone: string;
  @Column({ type: 'varchar', length: 255 })
  email: string;
  @Column({ type: 'varchar', length: 255 })
  passport: string;
  @Column({ type: 'varchar', length: 255 })
  purpose: string;
  @Column({ type: 'varchar', length: 255 })
  issued: string | undefined;
  @Column({ type: 'varchar', length: 255 })
  nombrePDF: string;
}
