CREATE TABLE "users" (
  "id" int PRIMARY KEY NOT NULL,
  "username" string(50) NOT NULL,
  "email" string(100) UNIQUE NOT NULL,
  "hashed_password" string(255) NOT NULL,
  "created_at" timestamp NOT NULL
);

CREATE TABLE "notebooks" (
  "id" int PRIMARY KEY NOT NULL,
  "title" string(100) NOT NULL,
  "user_id" int NOT NULL,
  "created_at" timestamp NOT NULL,
  "updated_at" timestamp NOT NULL
);

CREATE TABLE "notes" (
  "id" int PRIMARY KEY NOT NULL,
  "title" string(100) NOT NULL,
  "content" string NOT NULL,
  "user_id" int NOT NULL,
  "notebook_id" int NOT NULL,
  "created_at" timestamp NOT NULL,
  "updated_at" timestamp NOT NULL
);

CREATE TABLE "tags" (
  "id" int PRIMARY KEY NOT NULL,
  "title" string(30) NOT NULL,
  "userId" int NOT NULL
);

CREATE TABLE "note_tags" (
  "note_id" int NOT NULL,
  "tag_id" int NOT NULL
);

ALTER TABLE "notebooks" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "notes" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "notes" ADD FOREIGN KEY ("notebook_id") REFERENCES "notebooks" ("id");

ALTER TABLE "tags" ADD FOREIGN KEY ("userId") REFERENCES "users" ("id");

ALTER TABLE "note_tags" ADD FOREIGN KEY ("note_id") REFERENCES "notes" ("id");

ALTER TABLE "note_tags" ADD FOREIGN KEY ("tag_id") REFERENCES "tags" ("id");
