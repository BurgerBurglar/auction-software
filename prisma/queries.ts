import { Overview } from "../types";
import { flattenObject } from "../utils/flatten";
import { prisma } from "./client";
export const getOverview = async () => {
  const results = await prisma.ilance_projects.findMany({
    include: {
      user: true,
      category: true,
    },
  });

  const overviews = results.map((result) =>
    flattenObject(result)
  ) as Overview[];
  return overviews;
};
