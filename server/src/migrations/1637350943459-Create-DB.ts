import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateDB1637350943459 implements MigrationInterface {
    name = 'CreateDB1637350943459'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "User" ("id" int NOT NULL IDENTITY(1,1), "nick" varchar(20) NOT NULL, "pass" varchar(30) NOT NULL, "typeUserId" int, CONSTRAINT "PK_9862f679340fb2388436a5ab3e4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "TypeUser" ("id" int NOT NULL IDENTITY(1,1), "code" varchar(15) NOT NULL, "descript" varchar(50) NOT NULL, CONSTRAINT "PK_8145bb65c07e7638a8fc078cf2f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "User" ADD CONSTRAINT "FK_7b94c149d5724452309f1599b08" FOREIGN KEY ("typeUserId") REFERENCES "TypeUser"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "User" DROP CONSTRAINT "FK_7b94c149d5724452309f1599b08"`);
        await queryRunner.query(`DROP TABLE "TypeUser"`);
        await queryRunner.query(`DROP TABLE "User"`);
    }

}
