import * as React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { Footer } from './components/footer';
import { MainContent } from './components/main-content';
import { ToastContainer } from './components/toast';
import { LayoutContext, LayoutType } from './hooks/use-layout';
import { useScrollTopOnNavigate } from './hooks/use-scroll-top-on-navigate';
import { initAuthStatus } from './modules/auth/auth.actions';
import { ChatLauncher } from './modules/auth/components/chat-launcher';
import { CareersPage } from './pages/careers';
import { CartPage } from './pages/cart-page';
import { HelpPage } from './pages/help-page';
import { Login } from './pages/login';
import { MainPage } from './pages/main-page';
import { NotFoundPage } from './pages/not-found-page';
import { PaymentPage } from './pages/payment-page';
import { ProductPage } from './pages/product-page';
import { Signup } from './pages/signup';
import { SiteNav } from './site-nav';

function AppContainer({ initAuthStatus }: ConnectedProps<typeof connector>) {
  React.useEffect(() => {
    initAuthStatus();
  }, [initAuthStatus]);

  const layoutContextValue = React.useState<LayoutType>('default');
  const layoutType = layoutContextValue[0];

  useScrollTopOnNavigate();

  return (
    <LayoutContext.Provider value={layoutContextValue}>
      {layoutType === 'default' && <SiteNav />}
      <MainContent>
        <Switch>
          <Route
            path="/product/:productId"
            render={({ match }) => (
              <ProductPage productId={match.params && match.params.productId} />
            )}
          />
          <Route path="/careers" component={CareersPage} />
          <Route path="/cart" component={CartPage} />
          <Route path="/pay" component={PaymentPage} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/help" component={HelpPage} />
          <Route path="/" exact component={MainPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </MainContent>
      {layoutType === 'default' && (
        <>
          <ChatLauncher />
          <Footer />
        </>
      )}
      <ToastContainer hideProgressBar />
    </LayoutContext.Provider>
  );
}

const connector = connect(null, {
  initAuthStatus,
});

const App = connector(AppContainer);

export default App;
