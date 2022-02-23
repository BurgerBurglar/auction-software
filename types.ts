import { ilance_projects, ilance_users, Category } from "@prisma/client";

export type Overview = ilance_projects & {
  user: ilance_users;
  category: Category;
};
