import { onehourRoutes } from './routes/Routes';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Router>
      <ToastContainer />
      <Routes>
        <>
          {onehourRoutes.map((onehourRoutes, index) => {
            return (
              <Route
                path={onehourRoutes.path}
                element={<onehourRoutes.Component />}
                key={index}
              />
            );
          })}
        </>
      </Routes>
    </Router>
  );
}

export default App;
