import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react'
import { IonReactRouter } from '@ionic/react-router'
import type { FC } from 'react'
import { Route } from 'react-router-dom'
import { HomePage } from './pages/Home'
import { routes as toolRoutes } from './tools'

setupIonicReact({
  mode: 'ios',
})

export const App: FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/" component={HomePage} />
        {toolRoutes.map(({ path, component }) => (
          <Route key={path} exact path={path} component={component} />
        ))}
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
)
