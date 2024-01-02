import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body';
import Header from './components/Header';
import store from './utils/store';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';
import Demo from './components/Demo';



function App() {

  const appRouter= createBrowserRouter([{
    path: "/",
    element: <Body/>,
    children: [
      {
        path: "/",
        element: <MainContainer/>
      }, 
      {
        path:"watch",
        element: <WatchPage/>
      },
      {
        path:"demo",
        element: <Demo/>
      }
    ]
  }]);


  return (
    <Provider store={store}>
    <div className="App">
      <>
        <Header/>
      {/* components will change according to app router dynakic rednering */}
        <RouterProvider router={appRouter}/>
        <Outlet/>
      </>
    </div>
    </Provider>
  );
}

export default App;
