import { useEffect, useState } from 'react';
import { Stack, CommandBarButton, Text, StackItem } from '@fluentui/react';

const addIcon = { iconName: 'Add' };
const mailIcon = { iconName: 'Mail' };
const stackStyles = {
  root: { height: 44 },
};
const logoStyles = {
  display: 'inline-block',
  padding: '20px',
  color: 'green',
};

const items = [
  {
    key: 'homeItem',
    text: 'Home',
    cacheKey: 'myCacheKey', // changing this key will invalidate this item's cache
    iconProps: { iconName: 'Add' },
    subMenuProps: {
      items: [
        {
          key: 'emailMessage',
          text: 'Email message',
          iconProps: { iconName: 'Mail' },
          ['data-automation-id']: 'newEmailButton', // optional
        },
        {
          key: 'calendarEvent',
          text: 'Calendar event',
          iconProps: { iconName: 'Calendar' },
        },
      ],
    },
  },
  {
    key: 'aboutItem',
    text: 'About',
    iconProps: { iconName: 'Upload' },
    onClick: () => console.log('Upload'),
  },
  {
    key: 'projectItem',
    text: 'Project',
    iconProps: { iconName: 'Share' },
    onClick: () => console.log('Share'),
  },
];

export default function Header() {
  const [items, setItems] = useState([]);

  useEffect(() => setItems(items), []);
  return (
    <Stack horizontal>
      <StackItem align="center">
        <Text block variant="large" style={logoStyles}>
          {' '}
          LOGO{' '}
        </Text>
      </StackItem>
      {items.map((item) => (
        <StackItem align="center" key={item.key}>
          <CommandBarButton
            text={item.text}
            // Set split=true to render a SplitButton instead of a regular button with a menu
            //split={true}
          />
        </StackItem>
      ))}
    </Stack>
  );
}
