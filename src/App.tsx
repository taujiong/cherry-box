import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react'
import { IonReactRouter } from '@ionic/react-router'
import type { FC } from 'react'
import { Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { TheDay } from './tools'

setupIonicReact({
  mode: 'ios',
})

export const App: FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/" component={Home} />
        <Route exact path="/the-day" component={TheDay} />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
)
