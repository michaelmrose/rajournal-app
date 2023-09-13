import React, { useEffect, useState } from 'react';
import sendRequest from '../../utilities/send-request';
import './style.css';
import { Flex, Text, Button, Box, Card } from '@radix-ui/themes';

export default function HistoryPage(props) {
    const [journals, setJournals] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await sendRequest('/api/users/:id/journalEntries', 'GET');
                setJournals(response);
            } catch (err) {
                console.error("An error occurred while fetching data: ", err);
            }
        };

        fetchData();
    }, []);
    console.log(`journals ${journals}`)

    return (
        <Flex className="journalEntries" direction="column">
            {journals.map((journal, index) => (
                <Card classname="journalEntry">
                   <div> {new Date(journal.creationDate).toLocaleString()}</div>
                    <div>Morning Pain Level: {journal.morningPainLevel}</div>
                    <div>Morning Stiffness Level: {journal.morningStiffnessLevel}</div>
                    <div>Morning Fatigue Level: {journal.morningFatigueLevel}</div>
                    <div>Day Pain Level: {journal.dayPainLevel}</div>
                    <div>Day Stiffness Level: {journal.dayStiffnessLevel}</div>
                    <div>Day Fatigue Level: {journal.dayFatigueLevel}</div>
                    <div>Quality of Sleep: {journal.qualityOfSleep}</div>
                    <div>Hours of Sleep: {journal.hoursOfSleep}</div>
                </Card>
            ))}
        </Flex>
    );
};