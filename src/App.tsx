import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <NotFound />,
  },
]);

class App extends React.PureComponent {
  render() {
    return (
      <>
        <header>2</header>
        <RouterProvider router={router} />
      </>
    );
  }
}

export default App;
