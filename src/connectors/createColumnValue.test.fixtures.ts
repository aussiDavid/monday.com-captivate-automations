import type { ColumnValuesType } from "../types";

let id = 0;

export const createColumnValues = (text = "text value"): ColumnValuesType => {
  id += 1;
  return {
    id: `col${id}`,
    title: "Title",
    value: "{}",
    type: "",
    text,
  };
};
