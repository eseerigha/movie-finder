import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import 'assets/scss/custom.scss';
import Layout from 'components/Layout';

const Home = lazy(() => import('routes/Home'));
function App() {
  return (
    <div className="App">
      <Layout>
        <Router>
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route path="/" exact component={Home} />
            </Switch>
          </Suspense>
        </Router>
      </Layout>
    </div>
  );
}

export default App;
