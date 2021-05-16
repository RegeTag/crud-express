import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createUserTable1621119586212 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:"users",
                columns:[
                    {
                        isPrimary:true,
                        name:"id",
                        type:"integer",
                        generationStrategy:"increment"
                    },
                    {
                        name:"first_name",
                        type:"varchar"
                    },
                    {
                        name:"last_name",
                        type:"varchar"
                    },
                    {
                        name:"email",
                        type:"varchar"
                    },
                    {
                        name:"login",
                        type:"varchar"
                    },
                    {
                        name:"password",
                        type:"varchar"
                    },
                    {
                        name:"created_at",
                        type:"date",
                        default:"now()"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users")
    }

}
