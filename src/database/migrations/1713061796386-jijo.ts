import { MigrationInterface, QueryRunner } from 'typeorm';

export class Jijo1713061796386 implements MigrationInterface {
  name = 'Jijo1713061796386';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TYPE "public"."user_role_enum" AS ENUM('admin', 'cobrador')`,
    );
    await queryRunner.query(
      `CREATE TABLE "user" ("id" SERIAL NOT NULL, "email" character varying(255) NOT NULL, "password" character varying(255) NOT NULL, "role" "public"."user_role_enum" NOT NULL DEFAULT 'cobrador', "recoveryToken" text, "created_at" TIMESTAMP NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone, "updated_at" TIMESTAMP NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone, CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "pdf" ("id" SERIAL NOT NULL, "date" date NOT NULL, "name" character varying(255) NOT NULL, "idNumber" character varying(255) NOT NULL, "city" character varying(255) NOT NULL, "address" character varying(255) NOT NULL, "phone" character varying(255) NOT NULL, "email" character varying(255) NOT NULL, "passport" character varying(255) NOT NULL, "purpose" character varying(255) NOT NULL, "issued" character varying(255) NOT NULL, "nombrePDF" character varying(255) NOT NULL, CONSTRAINT "PK_395fa8d4021d7d68d72378ce096" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "pdf"`);
    await queryRunner.query(`DROP TABLE "user"`);
    await queryRunner.query(`DROP TYPE "public"."user_role_enum"`);
  }
}
