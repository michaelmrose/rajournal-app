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
    <Theme  appearance='dark' hasBackground="true" colorScheme="dark" accentColor='violet' radius="large" scaling='95%'>
        < Box style={{backgroundColor:"white"}}>
          <main className="App">
            {user ?
              <>
                <NavBar user={user} setUser={setUser} />
                <Routes>
                  <Route path="/today" element={<TodayPage />} />
                  <Route path="/history" element={<HistoryPage />} />
                  <Route path="/notes" element={<NotesPage />} />
                  <Route path="/graph" element={<GraphPage />} />
                </Routes>
              </>
              :
              <AuthPage setUser={setUser} />
            }
          </main>
        </Box>
    </Theme>
  );
}
