import axios from 'axios'
import React from 'react'

function get_link(lenguage){
  if (lenguage == "en"){
    return "events";
  } else {
    return "eventos";
  }
}

export default {
  Document: ({ Html, Head, Body, children, siteData, renderMeta }) => (
    <Html lang="en-US" prefix='og: http://ogp.me/ns# fb: http://ogp.me/ns/fb#'>
      <Head>
        <meta charSet="UTF-8" />
        <meta property='og:title' content='Solitrade Group' />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://solitrade.netlify.com/' />
        <meta property='og:image' content='https://solitrade.netlify.com/static/logo.e70ee3ee.png' />
        <meta property='og:description' content='Solitrade Group' />
        <meta property='og:site_name' content='Solitrade' />
        <meta property='og:locale' content='es-MX' />
        <meta property='fb:admins' content='' />
        <meta property='fb:app_id' content='' />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Body>{children}</Body>
    </Html>
  ),
  getSiteData: () => ({
    title: 'Solitrade',
    lastBuilt: Date.now(),
    siteRoot: 'https://solitrade.netlify.com/',

  }),
  getRoutes: async () => {
    const { data: events } = await axios.get('https://sales.solitrade.com/json')
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
