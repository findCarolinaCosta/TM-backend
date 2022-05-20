-- CreateTable
CREATE TABLE `users` (
    `id` VARCHAR(191) NOT NULL,
    `username` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `job` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tasks` (
    `id` VARCHAR(191) NOT NULL,
    `task` VARCHAR(191) NOT NULL,
    `tags` VARCHAR(191) NULL,

    UNIQUE INDEX `tasks_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user_tasks` (
    `userId` VARCHAR(191) NOT NULL,
    `taskId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `user_tasks_userId_key`(`userId`),
    UNIQUE INDEX `user_tasks_taskId_key`(`taskId`),
    PRIMARY KEY (`userId`, `taskId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `user_tasks` ADD CONSTRAINT `user_tasks_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `user_tasks` ADD CONSTRAINT `user_tasks_taskId_fkey` FOREIGN KEY (`taskId`) REFERENCES `tasks`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
