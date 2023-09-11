import { useState, useEffect } from 'react';


import { Flex, Text, Button, Box} from '@radix-ui/themes';
import * as Form from '@radix-ui/react-form';

import './style.css';
import sendRequest from '../../utilities/send-request';

export default function TodayPage(props) {
  const [journalEntries, setJournalEntries] = useState([])
  useEffect(() => {
    async function fetchData() {
      try {
        setJournalEntries(await sendRequest(`/api/users/{props.user}/journalEntries`))
      } catch (error) {
        console.log("error while fetching journal entries")
      }
    }
    fetchData()
  }, [])
  return (
    <Flex align="center" justify="center" className="todayBox" direction="column">
      <h1 style={{ color: "Indigo" }}>Today Page</h1>
      <div>
        {journalEntries.map(e => <p>{e.painLevel}</p>)}
      </div>
    </Flex>
  );
}