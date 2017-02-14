// import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path : 'work',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const WorkContainer = require('./containers/WorkContainer').default
      // const reducer = require('./modules/work').default

      /*  Add the reducer to the store on key 'work'  */
      // injectReducer(store, { key: 'work', reducer })

      /*  Return getComponent   */
      cb(null, WorkContainer)

    /* Webpack named bundle   */
    }, 'work')
  }
})
