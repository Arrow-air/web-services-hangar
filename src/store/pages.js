import { defineStore } from 'pinia'

export const usePagesMenuStore = defineStore("pages-menu", {
  id: 'pages-store',
  state: () => {
    return {
      pagesMenu: {
        categories: [
          {
            name: 'Manage Assets',
            icon: 'menu/manage-assets',
            pages: [
            {
              name: 'Overview',
              path: '/manage-assets/overview',
              order: 1
            },
            {
              name: 'VTOL-Aircraft',
              path: '/manage-assets/vtol-aircrafts',
              order: 2
            },
            ]
          },
          {
            name: 'Analyse',
            icon: 'menu/analyse',
            pages: [
              {
                name: 'Overview',
                path: '/analyse/overview',
                order: 1
              },
            ]
          },
          {
            name: 'Flights',
            icon: 'menu/flights',
            pages: [
              {
                name: 'Aircraft',
                path: '/flights/aircraft',
                order: 1
              },
              {
                name: 'Vertiports',
                path: '/flights/vertiports',
                order: 2
              },
              {
                name: 'Hangars',
                path: '/flights/hangars',
                order: 3
              }
            ]
          },
          {
            name: 'Documents',
            icon: 'menu/documents',
            pages: []
          },
          {
            name: 'Settings',
            icon: 'menu/settings',
            pages: []
          },
          {
            name: 'Billing',
            icon: 'menu/billing',
            pages: []
          }
        ]
      }
    }
  },
  actions: {},
  getters: {
    getPagesMenu: state => state.pagesMenu,
    getCategories: state => state.pagesMenu.categories,
  },
})