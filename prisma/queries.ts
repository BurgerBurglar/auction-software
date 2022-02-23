import { prisma } from "./client";
export const getOverview = () => {
  return prisma.ilance_projects.findMany({
    include: {
      user: true,
      category: true,
    },
  });
};
