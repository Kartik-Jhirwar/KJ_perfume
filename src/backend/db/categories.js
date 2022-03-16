import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Men",
    description:
      "A masculine fragrance is usually a fragrance with a woody, green, smokey, or spicy scent with a heavy emphasis on the base notes of the fragrance.",
  },
  {
    _id: uuid(),
    categoryName: "Women",
    description:
      "The gorgeous scent features notes of magnolia, musk, tangerine, blueberry, Bulgarian rose, and patchouli.",
  },
  
];
