import { Routes, Route } from 'react-router-dom';
import { Main } from './pages/main';
import { SignIn } from './pages/signin';
import { SignUp } from './pages/signup';

export function App() {
  return (
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/signin' element={<SignIn />} />
    </Routes>
  );
}
