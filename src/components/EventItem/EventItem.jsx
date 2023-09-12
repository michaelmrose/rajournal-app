import { Box, Text } from '@radix-ui/themes';

export default function EventItem ({ title }) {
    return (
        <Box className="eventItem" style={{ border: '1px solid #ccc', padding: '1em', margin: '0.5em 0' }}>
            <Text as="h3">{title}</Text>
        </Box>)
}