import { defineStore } from "pinia";

export const useProjectStore = defineStore("project", {
  state: () => {
    return {
      projects: [
        {
          id: 1,
          title: "Grand Hotel Abeer",
          address: "Velingrad, Nikolay Gyaurov Square",
          path: "/gallery/1",
          landing: {
            photo: "https://imgur.com/2uiEAj0.jpg",
            order: 1,
          },
          photos: [
            {
              id: 1,
              taken: null,
              url: "https://imgur.com/4XFzUUk.jpg",
            },
            {
              id: 2,
              taken: null,
              url: "https://imgur.com/4bakYwJ.jpg",
            },
            {
              id: 3,
              taken: null,
              url: "https://imgur.com/d3wME5U.jpg",
            },
            {
              id: 4,
              taken: null,
              url: "https://imgur.com/8vZWUwm.jpg",
            },
            {
              id: 5,
              taken: null,
              url: "https://imgur.com/ZwzKEd2.jpg",
            },
            {
              id: 6,
              taken: null,
              url: "https://imgur.com/ESD8LLi.jpg",
            },
            {
              id: 7,
              taken: null,
              url: "https://imgur.com/V6fLvE8.jpg",
            },
            {
              id: 8,
              taken: null,
              url: "https://imgur.com/rUIH0rb.jpg",
            },
            {
              id: 9,
              taken: null,
              url: "https://imgur.com/8w0bBKE.jpg",
            },
            {
              id: 10,
              taken: null,
              url: "https://imgur.com/TR69ivc.jpg",
            },
            {
              id: 11,
              taken: null,
              url: "https://imgur.com/LLSJTQj.jpg",
            },
            {
              id: 12,
              taken: null,
              url: "https://imgur.com/6t38qW7.jpg",
            },
            {
              id: 13,
              taken: null,
              url: "https://imgur.com/kt5FU56.jpg",
            },
            {
              id: 14,
              taken: null,
              url: "https://imgur.com/AkcRcp6.jpg",
            },
            {
              id: 15,
              taken: null,
              url: "https://imgur.com/oQ8PP0m.jpg",
            },
            {
              id: 16,
              taken: null,
              url: "https://imgur.com/2uiEAj0.jpg",
            },
          ],
        },
        {
          id: 2,
          title: "Pan Ocean",
          address: "Sofia, st. Panagyurishte №39",
          path: "/gallery/2",
          landing: {
            photo: "https://i.imgur.com/O99G249.jpg",
            order: 2,
          },
          photos: [
            {
              id: 1,
              taken: null,
              url: "https://i.imgur.com/YtKRSN1.jpg",
            },
            {
              id: 2,
              taken: null,
              url: "https://i.imgur.com/xCM1XXm.jpg",
            },
            {
              id: 3,
              taken: null,
              url: "https://i.imgur.com/O99G249.jpg",
            },
          ],
        },
        {
          id: 3,
          title: "Balkan Pearl",
          address: "Sofia, st. Ohridsko Ezero №54",
          path: "/gallery/3",
          landing: {
            photo: "https://i.imgur.com/ndejd2u.jpg",
            order: 3,
          },
          photos: [
            {
              id: 1,
              taken: null,
              url: "https://i.imgur.com/QdEm07B.jpg",
            },
            {
              id: 2,
              taken: null,
              url: "https://i.imgur.com/R9CZm3w.jpg",
            },
            {
              id: 3,
              taken: null,
              url: "https://i.imgur.com/ndejd2u.jpg",
            },
          ],
        },
        {
          id: 4,
          title: "Acres Invest",
          address: "кв. Студентски град, ул. Тодор Недков",
          landing: {
            photo: null,
            order: 4,
          },
          path: "/pdf/4",
          pdfSrc:
            "https://onedrive.live.com/embed?cid=5E73CF73E97ABE76&resid=5E73CF73E97ABE76%211870&authkey=AO5HsZ4PArq9sCk&em=2",
        },
        {
          id: 5,
          title: "Building Invest 62",
          address: "кв. Студентски град, ул. Тодор Недков",
          landing: {
            photo: null,
            order: 5,
          },
          path: "/pdf/5",
          pdfSrc:
            "https://onedrive.live.com/embed?cid=5E73CF73E97ABE76&resid=5E73CF73E97ABE76%211871&authkey=AKNLgxTh7EvMEb8&em=2",
        },
      ],
    };
  },
});
