# Backend

1. Tạo Node_modules
-> npm i

2. Tạo model với sequelize:

-> using npm

npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string

-> using yarn

yarn sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string

=> Tạo 2 file: model và migration

3. Migrations:

-   Tạo migrations:

-> using npm 

npx sequelize-cli migration:generate --name demo-user

-> 

-   Chạy migrations:

-> using npm

npx sequelize-cli db:migrate

-> using yarn

yarn sequelize-cli db:migrate

-   Gỡ migrations:

-> using npm

npx sequelize-cli db:migrate:undo

-> using yarn

yarn sequelize-cli db:migrate:undo

4. Tạo seeders:

-   Tạo seeder:

-> using npm

npx sequelize-cli seed:generate --name demo-user

-> using yarn

yarn sequelize-cli seed:generate --name demo-user

-   Chạy seeder:

-> using npm

npx sequelize-cli db:seed:all/seeder's name

-> using yarn

yarn sequelize-cli db:seed:all/seeder's name

-   Undo seeder:

-> using npm

npx sequelize-cli db:seed:undo

-> using yarn

yarn sequelize-cli db:seed:undo