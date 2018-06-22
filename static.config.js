import axios from 'axios'

function get_link(lenguage){
  if (lenguage == "en"){
    return "events";
  } else {
    return "eventos";
  }
}

export default {
  getSiteData: () => ({
    title: 'Solitrade',
  }),
  getRoutes: async () => {
    const { data: events } = await axios.get('http://sales.solitrade.com/json')
    // console.log(events)
    return [
      {
        path: '/',
        component: 'src/containers/Index'
      },
      {
        path: '/contact',
        component: 'src/containers/ContactUs'
      },
      {
        path: '/products',
        component: 'src/containers/Products'
      },
      {
        path: '/community',
        component: 'src/containers/Community'
      },
      // {
      //   path: '/menu',
      //   component: 'src/containers/Index'
      // },
      // {
      //   path: '/footer',
      //   component: 'src/containers/Footer'
      // },
      {
        path: '/about',
        component: 'src/containers/AboutUs'
      },
      {
        path: '/events',
        component: 'src/containers/Events',
        getData: () => ({
          events,

        }),
        children: events.events.map(event => ({
          path: `/${get_link(event.language)}/${event.name.replace(/\s+/g, '-').toLowerCase()}`,
          // path: `/${event.id}`,
          component: 'src/containers/Event',
          getData: () => ({
            event,
          }),
        })),
      },
      {
        is404: true,
        component: 'src/containers/404',
      },
    ]
  },
}
