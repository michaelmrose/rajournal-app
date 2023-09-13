import { useState, useEffect } from 'react';


import { Flex, Text, Button, Box } from '@radix-ui/themes';
import * as Form from '@radix-ui/react-form';
import * as RadioGroup from '@radix-ui/react-radio-group';
import * as Slider from '@radix-ui/react-slider';
import EventList from '../../components/EventList/EventList';

import './style.css';
import sendRequest from '../../utilities/send-request';
import ButtonRadioGroup from '../../components/ButtonRadioGroup/ButtonRadioGroup';


export default function TodayPage(props) {
  const [error, setError] = useState('');
  const [state, setState] = useState({
    qualityOfSleep: "OK",
    hoursOfSleep: [8],
    note: "",
    morningPainLevel: [5],
    morningStiffnessLevel: [5],
    morningFatigueLevel: [5],
    dayPainLevel: [5],
    dayStiffnessLevel: [5],
    dayFatigueLevel: [5],
    dayActivityLevel: [5],
    eventList: [],
  })

  function handleChange(evt) {
    setState({ ...state, [evt.target.name]: evt.target.value });
    setError('');
  }

  function handleSliderChange(name, newValue) {
    setState({ ...state, [name]: newValue });
  }

  function handleEventsChange(newEvents) {
    setState({ ...state, eventList: newEvents });
}
async function handleSubmit(evt) {
  evt.preventDefault();
  
  const userId = props.user._id

  // Prepare the journal entry data based on updated schema names
  const journalEntry = {
    creationDate: new Date(),
    morningPainLevel: state.morningPainLevel[0],
    morningStiffnessLevel: state.morningStiffnessLevel[0],
    morningFatigueLevel: state.morningFatigueLevel[0],
    dayPainLevel: state.dayPainLevel[0],
    dayStiffnessLevel: state.dayStiffnessLevel[0],
    dayFatigueLevel: state.dayFatigueLevel[0],
    qualityOfSleep: state.qualityOfSleep,
    hoursOfSleep: state.hoursOfSleep[0],
  };
  try {
    // Create the journal entry first
    const journalResponse = await sendRequest(`/api/users/${userId}/journalEntries`, 'POST', journalEntry);
    if (journalResponse && journalResponse._id) {
      console.log('Journal entry created successfully');
      
      const journalId = journalResponse._id;
      
      // Prepare the life events data
      const lifeEvents = state.eventList.map((event) => ({
        date: new Date(),
        event: event.title,
      }));

      // Create life events associated with the journal entry
      await sendRequest(`/api/journalEntries/${journalId}/lifeEvents`, 'POST', lifeEvents);
      console.log('Life events created successfully');

      // Prepare the note data
      const note = {
        creationDate: new Date(),
        contents: state.note,
      };

      // Create the note
      await sendRequest(`/api/users/${userId}/notes`, 'POST', note);
      console.log('Note created successfully');

      // Reset the form state or navigate the user to a different page

    } else {
      console.log('Error creating journal entry');
    }
  } catch (error) {
    console.log('There was a problem with the network request', error);
  }
};

  return (
    <Flex align="center" justify="center" className="todayBox" direction="column">
      <h1 style={{ color: "Indigo" }}>Today</h1>

      <Form.Root className="FormRoot" onSubmit={handleSubmit}>


        <Form.Field className="FormField" name="sleep">
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
            <Form.Label className="FormLabel">Last night I Slept</Form.Label>
            <Form.Message className="FormMessage" match="valueMissing">
              Please make a selection
            </Form.Message>
            <Form.Message className="FormMessage" match="typeMismatch">
              Please make a selection
            </Form.Message>
          </div>
          <Form.Control asChild>
            <ButtonRadioGroup options={["Poorly", "OK", "Well"]} value={state.qualityOfSleep} onChange={handleChange} />


          </Form.Control>
        </Form.Field>

        <Form.Field className="FormField" name="hoursOfSleep">
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
            <Form.Label className="FormLabel">Hours of Sleep</Form.Label>
            <span>{state.hoursOfSleep}</span>
          </div>
          <Form.Control asChild>
            <Slider.Root
              className="SliderRoot"
              value={state.hoursOfSleep}
              onValueChange={(newValue) => handleSliderChange('hoursOfSleep', newValue)}
              max={12}
              step={1}>
              <Slider.Track className="SliderTrack">
                <Slider.Range className="SliderRange" />
              </Slider.Track>
              <Slider.Thumb className="SliderThumb" aria-label="Volume" />
            </Slider.Root>

          </Form.Control>
        </Form.Field>


        <h2>When I Woke Up I Felt</h2>
        <br />

        <Form.Field className="FormField" name="morningPainLevel">
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
            <Form.Label className="FormLabel">Pain</Form.Label>
            <span>{state.morningPainLevel[0]}</span>
          </div>
          <Form.Control asChild>
            <Slider.Root
              className="SliderRoot"
              defaultValue={[1]}
              value={state.morningPainLevel}
              onValueChange={(newValue) => handleSliderChange('morningPainLevel', newValue)}
              max={10}
              step={1}>
              <Slider.Track className="SliderTrack">
                <Slider.Range className="SliderRange" />
              </Slider.Track>
              <Slider.Thumb className="SliderThumb" aria-label="Volume" />
            </Slider.Root>

          </Form.Control>
        </Form.Field>


        <Form.Field className="FormField" name="morningStiffnessLevel">
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
            <Form.Label className="FormLabel">Stiffness</Form.Label>
            <span>{state.morningStiffnessLevel[0]}</span>
          </div>
          <Form.Control asChild>
            <Slider.Root
              className="SliderRoot"
              value={state.morningStiffnessLevel}
              onValueChange={(newValue) => handleSliderChange('morningStiffnessLevel', newValue)}
              max={10}
              step={1}>
              <Slider.Track className="SliderTrack">
                <Slider.Range className="SliderRange" />
              </Slider.Track>
              <Slider.Thumb className="SliderThumb" aria-label="Morning Stiffness" />
            </Slider.Root>

          </Form.Control>
        </Form.Field>


        <Form.Field className="FormField" name="morningFatigueLevel">
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
            <Form.Label className="FormLabel">Fatigue</Form.Label>
            <span>{state.morningFatigueLevel[0]}</span>
          </div>
          <Form.Control asChild>
            <Slider.Root
              className="SliderRoot"
              value={state.morningFatigueLevel}
              onValueChange={(newValue) => handleSliderChange('morningFatigueLevel', newValue)}
              max={10}
              step={1}>
              <Slider.Track className="SliderTrack">
                <Slider.Range className="SliderRange" />
              </Slider.Track>
              <Slider.Thumb className="SliderThumb" aria-label="Morning Fatigue" />
            </Slider.Root>

          </Form.Control>
        </Form.Field>

        <h2>Throughout the Day I felt</h2>
        <br />

        <Form.Field className="FormField" name="dayPainLevel">
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
            <Form.Label className="FormLabel">Pain</Form.Label>
            <span>{state.dayPainLevel[0]}</span>
          </div>
          <Form.Control asChild>
            <Slider.Root
              className="SliderRoot"
              value={state.dayPainLevel}
              onValueChange={(newValue) => handleSliderChange('dayPainLevel', newValue)}
              max={10}
              step={1}>
              <Slider.Track className="SliderTrack">
                <Slider.Range className="SliderRange" />
              </Slider.Track>
              <Slider.Thumb className="SliderThumb" aria-label="Day Pain" />
            </Slider.Root>

          </Form.Control>
        </Form.Field>


        <Form.Field className="FormField" name="dayStiffnessLevel">
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
            <Form.Label className="FormLabel">Stiffness</Form.Label>
            <span>{state.dayStiffnessLevel[0]}</span>
          </div>
          <Form.Control asChild>
            <Slider.Root
              className="SliderRoot"
              value={state.dayStiffnessLevel}
              onValueChange={(newValue) => handleSliderChange('dayStiffnessLevel', newValue)}
              max={10}
              step={1}>
              <Slider.Track className="SliderTrack">
                <Slider.Range className="SliderRange" />
              </Slider.Track>
              <Slider.Thumb className="SliderThumb" aria-label="Day Stiffness" />
            </Slider.Root>

          </Form.Control>
        </Form.Field>


        <Form.Field className="FormField" name="dayFatigueLevel">
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
            <Form.Label className="FormLabel">Fatigue</Form.Label>
            <span>{state.dayFatigueLevel[0]}</span>
          </div>
          <Form.Control asChild>
            <Slider.Root
              className="SliderRoot"
              value={state.dayFatigueLevel}
              onValueChange={(newValue) => handleSliderChange('dayFatigueLevel', newValue)}
              max={10}
              step={1}>
              <Slider.Track className="SliderTrack">
                <Slider.Range className="SliderRange" />
              </Slider.Track>
              <Slider.Thumb className="SliderThumb" aria-label="Day Fatigue" />
            </Slider.Root>

          </Form.Control>
        </Form.Field>

        <h2>I was able to do the things I needed to do despite my symptoms</h2>
        <br />


        <Form.Field className="FormField" name="dayActivityLevel">
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
            <Form.Label className="FormLabel">Activity</Form.Label>
            <span>{state.dayActivityLevel[0]}</span>
          </div>
          <Form.Control asChild>
            <Slider.Root
              className="SliderRoot"
              value={state.dayActivityLevel}
              onValueChange={(newValue) => handleSliderChange('dayActivityLevel', newValue)}
              max={10}
              step={1}>
              <Slider.Track className="SliderTrack">
                <Slider.Range className="SliderRange" />
              </Slider.Track>
              <Slider.Thumb className="SliderThumb" aria-label="Activity Level" />
            </Slider.Root>

          </Form.Control>
        </Form.Field>

        <Form.Field className="FormField" name="eventList">
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
            <Form.Label className="FormLabel">Today's Events</Form.Label>
          </div>
          <Form.Control asChild>
            <EventList
              eventList={state.eventList}
              onChange={handleEventsChange}
            />
          </Form.Control>
        </Form.Field>

        <Form.Field className="FormField" name="note">
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
            <Form.Label className="FormLabel">Note</Form.Label>
          </div>
          <Form.Control asChild>
            <textarea className="Textarea" value={state.note} onChange={handleChange} />
          </Form.Control>
        </Form.Field>



        <Form.Submit asChild>
          <Button  my="5" className="Button" style={{ marginTop: 10 }}>
            Save
          </Button>
        </Form.Submit>
      </Form.Root>

    </Flex>
  );
}