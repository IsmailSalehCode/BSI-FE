import { defineStore } from "pinia";

export const useProjectStore = defineStore("project", {
  state: () => {
    return {
      projects: [
        {
          title: "Acres Invest",
          path: "/acres-invest-jsc",
          divider: true,
        },
        {
          title: "Grand Hotel Abeer",
          path: "/posts/grand-hotel-abeer",
          divider: true,
        },
        {
          title: "Pan Ocean",
          path: "/posts/pan-ocean",
          divider: true,
        },
        {
          title: "Balkan Pearl",
          path: "/posts/balkan-pearl",
          divider: false,
        },
      ],
    };
  },
});
