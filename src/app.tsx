import 'app.css';
import { Route, Routes } from 'react-router-dom';
import Login from 'components/user/login';
import Register from 'components/user/register';
import NotfoundError from 'components/errors/notfound.error';
import DashboardContainer from 'components/containers/dashboard.container';
import Pokemon from 'components/pokemons/pokemon';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route path="dashboard" element={<DashboardContainer />}>
        <Route index element={<Pokemon />} />
      </Route>

      <Route path="*" element={<NotfoundError />} />
    </Routes>
  );
}

export default App;
