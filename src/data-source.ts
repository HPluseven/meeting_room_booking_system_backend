import { DataSource } from 'typeorm';

import { Permission } from './user/entities/permission.entity';
import { Role } from './user/entities/role.entity';
import { User } from './user/entities/user.entity';
import { MeetingRoom } from './meeting-room/entities/meeting-room.entity';
import { Booking } from './booking/entities/booking.entity';

const envObj = {
  mysql_server_host: 'mysql-container',
  mysql_server_port: '3306',
  mysql_server_username: 'root',
  mysql_server_password: 'seven',
  mysql_server_database: 'meeting_room_booking_system',
};

console.log();

export default new DataSource({
  type: 'mysql',
  host: `${envObj.mysql_server_host}`,
  port: +`${envObj.mysql_server_port}`,
  username: `${envObj.mysql_server_username}`,
  password: `${envObj.mysql_server_password}`,
  database: `${envObj.mysql_server_database}`,
  synchronize: false,
  logging: true,
  entities: [User, Role, Permission, MeetingRoom, Booking],
  poolSize: 10,
  migrations: ['./migrations/**.ts', './migrations/**.js'],
  connectorPackage: 'mysql2',
  extra: {
    authPlugin: 'sha256_password',
  },
});
