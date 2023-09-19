-- AlterTable
ALTER TABLE `course` ADD COLUMN `decisionPointId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `Course` ADD CONSTRAINT `Course_decisionPointId_fkey` FOREIGN KEY (`decisionPointId`) REFERENCES `DecisionPoint`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
