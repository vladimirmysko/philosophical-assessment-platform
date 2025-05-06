-- CreateTable
CREATE TABLE "reports" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "header" TEXT NOT NULL,
    "final_assessment" TEXT,
    "comment" TEXT,
    "depth_of_understanding" INTEGER,
    "argumentation_and_logic" INTEGER,
    "originality_and_criticism" INTEGER,
    "style_and_literacy" INTEGER,
    "formal_requirements" INTEGER,

    CONSTRAINT "reports_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "idx_reports_created_at" ON "reports"("created_at");
