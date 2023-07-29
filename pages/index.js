import Head from 'next/head';
import styles from '../styles/Home.module.css';

import { Stack, StackItem, Text, DetailsList } from '@fluentui/react';
import { DefaultButton, PrimaryButton } from '@fluentui/react/lib/Button';
import { TextField } from '@fluentui/react/lib/TextField';

const columns = [
  {
    key: 'column1',
    name: 'title',
  },
  {
    key: 'column2',
    name: 'description',
  },
];

const items = [
  {
    key: '1',
    name: 'naam 1',
    descripion: 'description 1',
  },
  {
    key: '1',
    name: 'naam 1',
    descripion: 'description 1',
  },
];

export default function Home(props) {
  const stackTokens = { childrenGap: 40 };
  const { disabled, checked } = props;
  const items = [
    {
      key: '1',
      name: 'naam',
      value: 'naam 1',
      descripion: 'description 1',
    },
    {
      key: '2',
      name: 'description',
      value: 'desciption 1',
      descripion: 'description 1',
    },
  ];
  function _alertClicked() {
    alert('Clicked');
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>
      <main className={styles.main}>
        <Text variant="large">Projecten</Text>
        <Stack horizontal tokens={stackTokens}>
          <StackItem align="end">
            <TextField label="Standard" />
          </StackItem>
          <StackItem align="end">
            <DefaultButton
              text="Standard"
              onClick={_alertClicked}
              allowDisabledFocus
              disabled={disabled}
              checked={checked}
            />
          </StackItem>
          <StackItem align="end">
            <PrimaryButton
              text="Primary"
              onClick={_alertClicked}
              allowDisabledFocus
              disabled={disabled}
              checked={checked}
            />
          </StackItem>
        </Stack>
        <DetailsList
          items={items}
          compact="false"
          //columns={columns}
          //selectionMode={SelectionMode.none}
          //getKey={this._getKey}
          setKey="none"
          //layoutMode={DetailsListLayoutMode.justified}
          isHeaderVisible={true}
          //onItemInvoked={this._onItemInvoked}
        />
      </main>
    </div>
  );
}
