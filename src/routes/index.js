// We only need to import the modules necessary for initial render
import CoreLayout from 'layouts/CoreLayout/CoreLayout'

import HomeRoute from 'routes/Home'
import WorkRoute from 'routes/Work'

import MusicRoute from 'routes/Music'
import TabithaRoute from 'routes/Tabitha'

import SoftwareRoute from 'routes/Software'
import PhotographyRoute from 'routes/Photography'
import FilmRoute from 'routes/Film'
import DesignRoute from 'routes/Design'
import MeRoute from 'routes/Me'
import BlogRoute from 'routes/Blog'

/*  Note: Instead of using JSX, we recommend using react-router
    PlainRoute objects to build route definitions.   */

export const createRoutes = (store) => ({
  path        : '/',
  component   : CoreLayout,
  indexRoute  : HomeRoute(store),
  childRoutes : [
    WorkRoute(store),
    MusicRoute(store),
    TabithaRoute(store),
    SoftwareRoute(store),
    PhotographyRoute(store),
    FilmRoute(store),
    DesignRoute(store),
    MeRoute(store),
    BlogRoute(store)
  ]
})

/*  Note: childRoutes can be chunked or otherwise loaded programmatically
    using getChildRoutes with the following signature:

    getChildRoutes (location, cb) {
      require.ensure([], (require) => {
        cb(null, [
          // Remove imports!
          require('./Counter').default(store)
        ])
      })
    }

    However, this is not necessary for code-splitting! It simply provides
    an API for async route definitions. Your code splitting should occur
    inside the route `getComponent` function, since it is only invoked
    when the route exists and matches.
*/

export default createRoutes
