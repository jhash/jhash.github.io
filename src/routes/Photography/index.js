import PhotographyView from 'routes/Photography/components/PhotographyView/PhotographyView'

import CAtoMIView from 'routes/Photography/components/CAtoMIView/CAtoMIView'
import EurotripView from 'routes/Photography/components/EurotripView/EurotripView'

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
    },
    {
      path: 'Eurotrip-17',
      component: EurotripView
    }
  ]
})

export default createRoutes
