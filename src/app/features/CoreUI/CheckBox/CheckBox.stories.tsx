import React from 'react';
import { action } from '@storybook/addon-actions';

import Checkbox from './CheckBox';
import '../../App/Root/Root.scss';
import Label from '../Label/Label';

export default {
  component: Checkbox,
  title: 'Check Box',
};

export const normal = () => (
  <Label title='Checkbox' position='right'>
    <Checkbox onClick={action('checked')} id='normal' />
  </Label>
);

export const checked = () => (
  <Label title='Checkbox' position='right'>
    <Checkbox onClick={action('checked')} id='checked' checked />
  </Label>
);

export const disabled = () => (
  <Label title='Checkbox' position='right'>
    <Checkbox disabled onClick={action('checked')} id='checked' />
  </Label>
);

export const Tabbing = () => (
  <>
    <Label title='Checkbox' position='right'>
      <Checkbox onClick={action('checked')} tabIndex={0} id='tab-0' />
    </Label>
    <Label title='Checkbox' position='right'>
      <Checkbox onClick={action('checked')} id='no-tabIndex' />
    </Label>
  </>
);
