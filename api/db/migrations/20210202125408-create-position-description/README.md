# Migration `20210202125408-create-position-description`

This migration has been generated at 2/2/2021, 6:54:08 AM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "PositionDescription" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "description" TEXT NOT NULL,
    "duties" TEXT NOT NULL,
    "education" TEXT NOT NULL,
    "Experience" TEXT NOT NULL,
    "purpose" TEXT NOT NULL,
    "qualifications" TEXT NOT NULL,
    "skills" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "workingConditions" TEXT NOT NULL
)
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20210202125408-create-position-description
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,25 @@
+datasource DS {
+  // optionally set multiple providers
+  // example: provider = ["sqlite", "postgresql"]
+  provider = "sqlite"
+  url = "***"
+}
+
+generator client {
+  provider      = "prisma-client-js"
+  binaryTargets = "native"
+}
+
+model PositionDescription {
+  id                Int      @id @default(autoincrement())
+  createdAt         DateTime @default(now())
+  description       String
+  duties            String
+  education         String
+  Experience        String
+  purpose           String
+  qualifications    String
+  skills            String
+  title             String
+  workingConditions String
+}
```


