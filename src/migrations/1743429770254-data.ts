import { MigrationInterface, QueryRunner } from 'typeorm';

export class Data1743429770254 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      "INSERT INTO `users` VALUES (1,'zhangsan','e10adc3949ba59abbe56e057f20f883e','张三','xxx@xx.com','uploads/1740362586203-52103428-test1.png','13233323333',0,1,'2025-01-19 09:20:18.526509','2025-02-28 15:58:04.986033'),(2,'lisi','e10adc3949ba59abbe56e057f20f883e','lisisisi','yy@yy.com','uploads/1740362586203-52103428-test1.png',NULL,0,0,'2025-01-19 09:20:18.530983','2025-02-28 15:58:04.991182'),(3,'gang','46e74eb740f35a72cbe162e087cc7a49','小刚','577079551@qq.com',NULL,NULL,0,0,'2025-02-16 14:45:29.958960','2025-02-16 14:45:29.958960');",
    );
    await queryRunner.query(
      "INSERT INTO `meeting_room` VALUES (1,'木星',10,'一层西','白板','',0,'2025-03-02 16:10:59.014040','2025-03-02 16:10:59.014040'),(2,'金星',5,'二层东','','',0,'2025-03-02 16:10:59.014040','2025-03-02 16:10:59.014040'),(3,'天王星',30,'三层东','白板，电视','',0,'2025-03-02 16:10:59.014040','2025-03-02 16:10:59.014040');",
    );
    await queryRunner.query(
      "INSERT INTO `booking` VALUES (1,'2025-03-03 00:23:07','2025-03-03 01:23:07','申请中','','2025-03-02 16:23:07.067452','2025-03-02 16:23:07.067452',1,3),(2,'2025-03-03 00:23:07','2025-03-03 01:23:07','申请中','','2025-03-02 16:23:07.075826','2025-03-02 16:23:07.075826',2,NULL),(3,'2025-03-03 00:23:07','2025-03-03 01:23:07','申请中','','2025-03-02 16:23:07.079423','2025-03-02 16:23:07.079423',2,3),(4,'2025-03-03 00:23:07','2025-03-03 01:23:07','申请中','','2025-03-02 16:23:07.082861','2025-03-02 16:23:07.082861',1,NULL);",
    );
    await queryRunner.query(
      "INSERT INTO `permissions` VALUES (1,'ccc','访问 ccc 接口'),(2,'ddd','访问 ddd 接口');",
    );
    await queryRunner.query(
      "INSERT INTO `roles` VALUES (1,'管理员'),(2,'普通用户');",
    );
    await queryRunner.query(
      'INSERT INTO `role_permissions` VALUES (1,1),(1,2),(2,1);',
    );
    await queryRunner.query('INSERT INTO `user_roles` VALUES (1,1),(2,2);');
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('TRUNCATE TABLE booking');
  }
}
