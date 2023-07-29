import { Breadcrumb } from '@fluentui/react';

const items = [
  { text: 'Files', key: 'Files', onClick: _onBreadcrumbItemClicked },
  { text: 'Files', key: 'Files1', onClick: _onBreadcrumbItemClicked },
  { text: 'Files', key: 'Files3', onClick: _onBreadcrumbItemClicked },
  { text: 'Files', key: 'Files4', onClick: _onBreadcrumbItemClicked },
];

export default function Contentheader() {
  return <Breadcrumb items={items} />;
}

function _onBreadcrumbItemClicked(ev, item) {
  console.log(`Breadcrumb item with key "${item.key}" has been clicked.`);
}
