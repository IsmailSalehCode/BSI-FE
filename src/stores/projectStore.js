import { defineStore } from "pinia";

export const useProjectStore = defineStore("project", {
  state: () => {
    return {
      projects: [
        {
          title: "Grand Hotel Abeer",
          address: "Velingrad, Nikolay Gyaurov Square",
          path: "/posts/grand-hotel-abeer",
          landing: {
            photo: "https://imgur.com/2uiEAj0.jpg",
          },
        },
        {
          title: "Pan Ocean",
          address: "Sofia, st. Panagyurishte №39",
          path: "/posts/pan-ocean",
          landing: {
            photo: "https://i.imgur.com/O99G249.jpg",
          },
        },
        {
          title: "Balkan Pearl",
          address: "Sofia, st. Ohridsko Ezero №54",
          path: "/posts/balkan-pearl",
          landing: {
            photo: "https://i.imgur.com/ndejd2u.jpg",
          },
        },
        {
          title: "Acres Invest",
          address: "кв. Студентски град, ул. Тодор Недков",
          path: "/acres-invest-jsc",
          landing: {
            photo: null,
          },
        },
      ],
    };
  },
});
