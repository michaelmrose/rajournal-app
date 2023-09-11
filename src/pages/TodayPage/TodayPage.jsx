import { Flex, Text, Button, Box } from '@radix-ui/themes';
import './style.css'; 

export default function TodayPage(props) {
  return (
    <Flex align="center" justify="center" className="todayBox">
      <h1 style={{ color: "Indigo" }}>Today Page</h1>
    </Flex>
  );
}