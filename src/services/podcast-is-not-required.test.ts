// import { NOT_REQURED_LABELS, PODCAST_COLUMN_TITLE } from "../constants";
// import { ItemType } from "../types";

import { podcastIsNotRequired } from "./podcast-is-not-required";

// export const podcastIsNotRequired = (item: ItemType): boolean => {
//   const podcastColumnValue =
//     item.column_values.find(({ title }) => title === PODCAST_COLUMN_TITLE)
//       ?.text || "";

//   return NOT_REQURED_LABELS.includes(podcastColumnValue);
// };

// const item = () => ();

describe("podcastIsNotRequired", () => {
  describe("when the item does not have a Podcast column", () => {
    const item = {
      id: 1,
      state: "active",
      name: "Item",
      column_values: [],
      board: {
        id: 2,
        name: "Board",
        columns: [],
        groups: [],
      },
      group: {
        id: "group_id",
        title: "Group Title",
        archived: false,
        position: 0,
      },
    };
    it("is not required for a podcast", () => {
      expect.hasAssertions();
      expect(podcastIsNotRequired(item)).toBe(true);
    });
  });

  describe("when the item does has a blank Podcast column", () => {
    const item = {
      id: 1,
      state: "active",
      name: "Item",
      column_values: [
        {
          id: "2",
          value: "{}",
          type: "mirror",
          text: "",
          title: "Podcasts",
        },
      ],
      board: {
        id: 2,
        name: "Board",
        columns: [],
        groups: [],
      },
      group: {
        id: "group_id",
        title: "Group Title",
        archived: false,
        position: 0,
      },
    };
    it("is not required for a podcast", () => {
      expect.hasAssertions();
      expect(podcastIsNotRequired(item)).toBe(true);
    });
  });

  describe("when the item Podcast column has the value 1", () => {
    const item = {
      id: 1,
      state: "active",
      name: "Item",
      column_values: [
        {
          id: "2",
          value: "{}",
          type: "mirror",
          text: "1",
          title: "Podcasts",
        },
      ],
      board: {
        id: 2,
        name: "Board",
        columns: [],
        groups: [],
      },
      group: {
        id: "group_id",
        title: "Group Title",
        archived: false,
        position: 0,
      },
    };
    it("is required for a podcast", () => {
      expect.hasAssertions();
      expect(podcastIsNotRequired(item)).toBe(false);
    });
  });
});
