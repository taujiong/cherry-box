import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react'
import { IonReactRouter } from '@ionic/react-router'
import type { FC } from 'react'
import { Route } from 'react-router-dom'
import { HomePage } from './pages/Home'
import { ToolRoutes } from './tools'

setupIonicReact({
  mode: 'ios',
})

export const App: FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/" component={HomePage} />
        {ToolRoutes}
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
)
