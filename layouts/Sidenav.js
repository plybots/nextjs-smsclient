import { Nav } from '@fluentui/react';

export default function Sidenav() {
  const navStyles = {
    root: {
      width: 250,
      boxSizing: 'border-box',
      marginLeft: '20px',
    },
  };

  const navLinkGroups = [
    {
      links: [
        {
          name: 'My Section',
          url: '/',
          expandAriaLabel: 'Expand Home section',
          links: [
            {
              name: 'Activity',
              url: '/projects',
              key: 'key1',
            },
            {
              name: 'MSN',
              url: '/projects',
              disabled: true,
              key: 'key2',
            },
          ],
          isExpanded: false,
        },
        {
          name: 'Projects',
          url: '/projects',
          key: 'key3',
          expandAriaLabel: 'Expand Home section',
          links: [
            {
              name: 'Dashboard',
              url: 'http://msn.com',
              key: 'key4',
            },
            {
              name: 'ITP',
              url: 'http://msn.com',
              disabled: true,
              key: 'key5',
            },
            {
              name: 'Document Review',
              url: 'http://msn.com',
              disabled: true,
              key: 'key6',
              target: '_blank',
            },
          ],
          isExpanded: true,
        },
        {
          name: 'Pages',
          url: 'http://msn.com',
          key: 'key7',
          target: '_blank',
        },

        {
          name: 'Communication and Media',
          url: 'http://msn.com',
          key: 'key8',
          target: '_blank',
        },
        {
          name: 'News',
          url: 'http://cnn.com',
          icon: 'News',
          key: 'key9',
          target: '_blank',
        },
      ],
    },
  ];

  return (
    <Nav groups={navLinkGroups} styles={navStyles} selectedKey="key3"></Nav>
  );
}
