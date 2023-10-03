-- CreateEnum
CREATE TYPE "RoleType" AS ENUM ('ONFARM', 'OFFFARM');

-- CreateEnum
CREATE TYPE "CategoryType" AS ENUM ('SCHOOLLEAVER', 'CAREERCHANGER', 'LIFELONGLEARNER');

-- CreateTable
CREATE TABLE "Account" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "providerAccountId" TEXT NOT NULL,
    "refresh_token" TEXT,
    "access_token" TEXT,
    "expires_at" INTEGER,
    "token_type" TEXT,
    "scope" TEXT,
    "id_token" TEXT,
    "session_state" TEXT,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Session" (
    "id" TEXT NOT NULL,
    "sessionToken" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Session_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "email" TEXT,
    "emailVerified" TIMESTAMP(3),
    "hashedPassword" TEXT,
    "image" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VerificationToken" (
    "identifier" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL
);

-- CreateTable
CREATE TABLE "DecisionPoint" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DecisionPoint_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CourseCategory" (
    "id" TEXT NOT NULL,
    "title" TEXT,
    "type" "CategoryType" NOT NULL,
    "decisionPointId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CourseCategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Course" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "shortDescription" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "level" TEXT NOT NULL,
    "duration" TEXT NOT NULL,
    "providerName" TEXT NOT NULL,
    "providerUrl" TEXT NOT NULL,
    "providerDescription" TEXT NOT NULL,
    "courseCategoryId" TEXT NOT NULL,
    "decisionPointId" TEXT NOT NULL,
    "image" BYTEA,
    "roleId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Course_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CourseRole" (
    "id" TEXT NOT NULL,
    "rolesName" TEXT NOT NULL,
    "type" "RoleType" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CourseRole_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Account_provider_providerAccountId_key" ON "Account"("provider", "providerAccountId");

-- CreateIndex
CREATE UNIQUE INDEX "Session_sessionToken_key" ON "Session"("sessionToken");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationToken_token_key" ON "VerificationToken"("token");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationToken_identifier_token_key" ON "VerificationToken"("identifier", "token");

-- CreateIndex
CREATE UNIQUE INDEX "DecisionPoint_title_key" ON "DecisionPoint"("title");

-- CreateIndex
CREATE UNIQUE INDEX "Course_title_key" ON "Course"("title");

-- AddForeignKey
ALTER TABLE "Account" ADD CONSTRAINT "Account_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Session" ADD CONSTRAINT "Session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CourseCategory" ADD CONSTRAINT "CourseCategory_decisionPointId_fkey" FOREIGN KEY ("decisionPointId") REFERENCES "DecisionPoint"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Course" ADD CONSTRAINT "Course_decisionPointId_fkey" FOREIGN KEY ("decisionPointId") REFERENCES "DecisionPoint"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Course" ADD CONSTRAINT "Course_courseCategoryId_fkey" FOREIGN KEY ("courseCategoryId") REFERENCES "CourseCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Course" ADD CONSTRAINT "Course_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "CourseRole"("id") ON DELETE SET NULL ON UPDATE CASCADE;
