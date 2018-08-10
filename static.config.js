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
  // siteRoot: 'https://solitrade.netlify.com/',
  Document: ({ Html, Head, Body, children, siteData, renderMeta }) => (
    <Html lang="en-US" prefix='og: http://ogp.me/ns# fb: http://ogp.me/ns/fb#'>
      <Head>
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
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

  }),
  getRoutes: async () => {
    const { data: events } = await axios.get('https://sales.solitrade.com/json')
    const { data: brochures } = await axios.get('https://sales.solitrade.com/brochures_json')
    // console.log(events)
    return [
      {
        path: '/',
        component: 'src/containers/en/Index',
        children: [
          {
            path: '/contact',
            component: 'src/containers/en/ContactUs'
          },
          {
            path: '/products',
            component: 'src/containers/en/Products'
          },
          {
            path: '/community',
            component: 'src/containers/en/Community'
          },
          {
            path: '/about',
            component: 'src/containers/en/AboutUs'
          },
          {
            path: '/success',
            component: 'src/containers/en/Success'
          },
          {
            path: '/events',
            component: 'src/containers/en/Events',
            getData: () => ({
              events,
            }),
            children: events.events.map(event => ({
              path: `/${event.name.replace(/\s+/g, '-').toLowerCase()}`,
              // path: `/${event.id}`,
              component: 'src/containers/en/Event',
              getData: () => ({
                event,
              }),
            })),
          },
          {
            path: '/brochures',
            component: 'src/containers/en/Brochures',
          },
          {
            path: '/brochures/garland',
            component: 'src/containers/en/Garland',
            getData: () => ({
              brochures,
            }),
          },
          {
            path: '/brochures/knauf',
            component: 'src/containers/en/Knauf',
            getData: () => ({
              brochures,
            }),
          },
          {
            path: '/brochures/silvercote',
            component: 'src/containers/en/Silvercote',
            getData: () => ({
              brochures,
            }),
          },
          {
            path: '/brochures/insudry',
            component: 'src/containers/en/InsuDry',
            getData: () => ({
              brochures,
            }),
          },
        ]
      },
      {
        path: '/es',
        component: 'src/containers/es/Index',
        children: [
          {
            path: '/contact',
            component: 'src/containers/es/ContactUs'
          },
          {
            path: '/products',
            component: 'src/containers/es/Products'
          },
          {
            path: '/community',
            component: 'src/containers/es/Community'
          },
          {
            path: '/about',
            component: 'src/containers/es/AboutUs'
          },
          {
            path: '/events',
            component: 'src/containers/es/Events',
            getData: () => ({
              events,
            }),
            children: events.events.map(event => ({
              path: `/${event.name.replace(/\s+/g, '-').toLowerCase()}`,
              // path: `/${event.id}`,
              component: 'src/containers/es/Event',
              getData: () => ({
                event,
              }),
            })),
          },
          {
            path: '/brochures',
            component: 'src/containers/es/Brochures',
          },
          {
            path: '/brochures/garland',
            component: 'src/containers/es/Garland',
            getData: () => ({
              brochures,
            }),
          },
          {
            path: '/brochures/knauf',
            component: 'src/containers/es/Knauf',
            getData: () => ({
              brochures,
            }),
          },
          {
            path: '/brochures/silvercote',
            component: 'src/containers/es/Silvercote',
            getData: () => ({
              brochures,
            }),
          },
          {
            path: '/brochures/insudry',
            component: 'src/containers/es/InsuDry',
            getData: () => ({
              brochures,
            }),
          },
        ]
      },
      {
        is404: true,
        component: 'src/containers/404',
      },
    ]
  },
}
