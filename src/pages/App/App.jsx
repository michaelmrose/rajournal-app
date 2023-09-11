import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import '@radix-ui/themes/styles.css';
import { Theme, ThemePanel, Box } from '@radix-ui/themes';


import { getUser } from '../../utilities/users-service';
import './App.css';

import AuthPage from '../AuthPage/AuthPage';
import GraphPage from '../GraphPage/GraphPage'
import HistoryPage from '../HistoryPage/HistoryPage'
import NotesPage from '../NotesPage/NotesPage'
import TodayPage from '../TodayPage/TodayPage'
import NavBar from '../../components/NavBar/NavBar';

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <Theme  appearance='dark' hasBackground="true"  accentColor='violet' radius="large" scaling='95%'>
          <main className="App">
            {user ?
              <div className='stage'>
                <NavBar user={user} setUser={setUser} mb="5" />
                <Routes>
                  <Route path="/today" element={<TodayPage user={user} />} />
                  <Route path="/history" element={<HistoryPage />} />
                  <Route path="/notes" element={<NotesPage />} />
                  <Route path="/graph" element={<GraphPage />} />
                </Routes>
              </div>
              :
              <AuthPage setUser={setUser} />
            }
          </main>
    </Theme>
  );
}
