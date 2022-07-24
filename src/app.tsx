import 'app.css'
import {Route, Routes} from 'react-router-dom'
import Login from 'components/user/login';
import Register from 'components/user/register';
import NotfoundError from 'components/errors/notfound.error';
function App() {

  return (
      <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<NotfoundError />} />
      </Routes>
  )
}

export default App
