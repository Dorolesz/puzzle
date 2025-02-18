-- CreateTable
CREATE TABLE `Puzzle` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `pictureUrl` VARCHAR(191) NOT NULL,
    `pieces` INTEGER NOT NULL,
    `beforeChristmas` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
