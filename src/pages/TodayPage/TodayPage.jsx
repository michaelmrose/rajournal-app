import { Flex, Text, Button, Box } from '@radix-ui/themes';
import { useState, useEffect } from 'react';
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
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquet nibh praesent tristique magna sit amet purus. Malesuada nunc vel risus commodo viverra maecenas accumsan. Duis convallis convallis tellus id interdum velit laoreet id. Mattis aliquam faucibus purus in massa tempor nec feugiat. Donec adipiscing tristique risus nec feugiat. At risus viverra adipiscing at in tellus integer feugiat scelerisque. Ullamcorper dignissim cras tincidunt lobortis feugiat. Rhoncus urna neque viverra justo nec ultrices. Pharetra pharetra massa massa ultricies mi quis hendrerit dolor.

        Ultricies leo integer malesuada nunc vel risus commodo. Est velit egestas dui id ornare arcu odio ut sem. Orci phasellus egestas tellus rutrum tellus. Mauris cursus mattis molestie a iaculis. Erat nam at lectus urna duis. Morbi quis commodo odio aenean sed adipiscing. Mi bibendum neque egestas congue quisque egestas. Augue mauris augue neque gravida in fermentum. Et malesuada fames ac turpis egestas sed tempus urna. Ipsum consequat nisl vel pretium lectus quam id leo in. Et pharetra pharetra massa massa ultricies. Nunc aliquet bibendum enim facilisis gravida neque. Elit eget gravida cum sociis natoque penatibus et. Platea dictumst quisque sagittis purus.

        Scelerisque felis imperdiet proin fermentum. Tempus imperdiet nulla malesuada pellentesque. Netus et malesuada fames ac turpis. Massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin. Mauris a diam maecenas sed. Diam vulputate ut pharetra sit amet aliquam. Et ultrices neque ornare aenean. Lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt. Nullam vehicula ipsum a arcu cursus vitae congue. Proin nibh nisl condimentum id venenatis a condimentum vitae sapien. Neque convallis a cras semper. Nisl nisi scelerisque eu ultrices vitae auctor eu augue. Adipiscing commodo elit at imperdiet dui accumsan sit amet nulla. Aenean et tortor at risus viverra adipiscing at in tellus. Orci eu lobortis elementum nibh.

        Enim ut tellus elementum sagittis vitae. Eget dolor morbi non arcu risus quis. Tortor consequat id porta nibh. Mauris ultrices eros in cursus turpis massa tincidunt dui. Aliquet enim tortor at auctor urna nunc id. Non pulvinar neque laoreet suspendisse interdum consectetur libero. Varius quam quisque id diam vel quam elementum pulvinar etiam. Sit amet cursus sit amet dictum sit amet. Turpis cursus in hac habitasse platea dictumst quisque sagittis purus. Tristique senectus et netus et. Purus in massa tempor nec.

        Aenean vel elit scelerisque mauris pellentesque. Sem fringilla ut morbi tincidunt augue interdum velit euismod in. Faucibus nisl tincidunt eget nullam non nisi est sit. Nec ullamcorper sit amet risus nullam eget felis eget nunc. Sed viverra tellus in hac habitasse platea. Dolor sed viverra ipsum nunc aliquet. Enim diam vulputate ut pharetra sit amet aliquam. Sagittis eu volutpat odio facilisis mauris sit. Magna sit amet purus gravida quis blandit turpis. Habitasse platea dictumst vestibulum rhoncus est pellentesque elit. Convallis a cras semper auctor neque vitae tempus quam pellentesque. Aliquam purus sit amet luctus venenatis lectus magna fringilla. Ullamcorper morbi tincidunt ornare massa. Quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus.
      </div>
    </Flex>
  );
}