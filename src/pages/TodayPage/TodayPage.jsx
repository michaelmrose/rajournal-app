import { useState, useEffect } from 'react';


import { Flex, Text, Button, Box } from '@radix-ui/themes';
import * as Form from '@radix-ui/react-form';
import * as RadioGroup from '@radix-ui/react-radio-group';
import * as Slider from '@radix-ui/react-slider';

import './style.css';
import sendRequest from '../../utilities/send-request';
import ButtonRadioGroup from '../../components/ButtonRadioGroup/ButtonRadioGroup';


export default function TodayPage(props) {
  const [error, setError] = useState('');
  const [state, setState] = useState({

  })

  function handleChange(evt) {
    setState({ ...state, [evt.target.name]: evt.target.value });
    setError('');
  }

  return (
    <Flex align="center" justify="center" className="todayBox" direction="column">
      <h1 style={{ color: "Indigo" }}>Today Page</h1>
      <Form.Root className="FormRoot">


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
            <ButtonRadioGroup options={["Poorly", "OK", "Well"]} value={state.sleep} onChange={handleChange}/>


          </Form.Control>
        </Form.Field>

        <Text>When I Woke Up I Felt</Text>
        <br />

        <Form.Field className="FormField" name="morningPain">
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
            <Form.Label className="FormLabel">Pain</Form.Label>
          </div>
          <Form.Control asChild>
            <Slider.Root className="SliderRoot" defaultValue={[1]} max={10} step={1}>
              <Slider.Track className="SliderTrack">
                <Slider.Range className="SliderRange" />
              </Slider.Track>
              <Slider.Thumb className="SliderThumb" aria-label="Volume" />
            </Slider.Root>

          </Form.Control>
        </Form.Field>


        <Form.Field className="FormField" name="morningStiffness">
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
            <Form.Label className="FormLabel">Stiffness</Form.Label>
          </div>
          <Form.Control asChild>
            <Slider.Root className="SliderRoot" defaultValue={[1]} max={10} step={1}>
              <Slider.Track className="SliderTrack">
                <Slider.Range className="SliderRange" />
              </Slider.Track>
              <Slider.Thumb className="SliderThumb" aria-label="Volume" />
            </Slider.Root>

          </Form.Control>
        </Form.Field>


        <Form.Field className="FormField" name="morningFatigue">
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
            <Form.Label className="FormLabel">Fatigue</Form.Label>
          </div>
          <Form.Control asChild>
            <Slider.Root className="SliderRoot" defaultValue={[1]} max={10} step={1}>
              <Slider.Track className="SliderTrack">
                <Slider.Range className="SliderRange" />
              </Slider.Track>
              <Slider.Thumb className="SliderThumb" aria-label="Volume" />
            </Slider.Root>

          </Form.Control>
        </Form.Field>

        <Text>Throughout the Day I felt</Text>
        <br />

        <Form.Field className="FormField" name="dayPain">
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
            <Form.Label className="FormLabel">Pain</Form.Label>
          </div>
          <Form.Control asChild>
            <Slider.Root className="SliderRoot" defaultValue={[1]} max={10} step={1}>
              <Slider.Track className="SliderTrack">
                <Slider.Range className="SliderRange" />
              </Slider.Track>
              <Slider.Thumb className="SliderThumb" aria-label="Volume" />
            </Slider.Root>

          </Form.Control>
        </Form.Field>


        <Form.Field className="FormField" name="dayStiffness">
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
            <Form.Label className="FormLabel">Stiffness</Form.Label>
          </div>
          <Form.Control asChild>
            <Slider.Root className="SliderRoot" defaultValue={[1]} max={10} step={1}>
              <Slider.Track className="SliderTrack">
                <Slider.Range className="SliderRange" />
              </Slider.Track>
              <Slider.Thumb className="SliderThumb" aria-label="Volume" />
            </Slider.Root>

          </Form.Control>
        </Form.Field>


        <Form.Field className="FormField" name="dayFatigue">
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
            <Form.Label className="FormLabel">Fatigue</Form.Label>
          </div>
          <Form.Control asChild>
            <Slider.Root className="SliderRoot" defaultValue={[1]} max={10} step={1}>
              <Slider.Track className="SliderTrack">
                <Slider.Range className="SliderRange" />
              </Slider.Track>
              <Slider.Thumb className="SliderThumb" aria-label="Volume" />
            </Slider.Root>

          </Form.Control>
        </Form.Field>

        <Text>I was able to do the things I needed to do despite my symptoms</Text>
        <br />


        <Form.Field className="FormField" name="dayActivity">
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
            <Form.Label className="FormLabel">Activity</Form.Label>
          </div>
          <Form.Control asChild>
            <Slider.Root className="SliderRoot" defaultValue={[1]} max={10} step={1}>
              <Slider.Track className="SliderTrack">
                <Slider.Range className="SliderRange" />
              </Slider.Track>
              <Slider.Thumb className="SliderThumb" aria-label="Volume" />
            </Slider.Root>

          </Form.Control>
        </Form.Field>


        <Form.Field className="FormField" name="note">
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
            <Form.Label className="FormLabel">Note</Form.Label>
          </div>
          <Form.Control asChild>
            <textarea className="Textarea" />
          </Form.Control>
        </Form.Field>
        <Form.Submit asChild>
          <Button my="5" className="Button" style={{ marginTop: 10 }}>
            Save
          </Button>
        </Form.Submit>
      </Form.Root>

    </Flex>
  );
}