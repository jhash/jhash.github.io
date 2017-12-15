import PhotographyView from 'routes/Photography/components/PhotographyView/PhotographyView'

import CAtoMIView from 'routes/Photography/components/CAtoMIView/CAtoMIView'

// export default (store) => ({
//   path: 'photography',
//   component: PhotographyView
// })

export const createRoutes = (store) => ({
  path        : 'photography',
  component   : PhotographyView,
  childRoutes : [
    {
      path: 'CA-MI-17',
      component: CAtoMIView
    }
  ]
})

export default createRoutes
