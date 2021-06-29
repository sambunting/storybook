import React from 'react';
import { AccordionItem } from '../AccordionItem';
import { AccordionHeader } from '../AccordionHeader';
import { AccordionBody } from '../AccordionBody';

// eslint-disable-next-line import/order
import type { ComponentStory, Meta } from '@storybook/react';

export default {
  title: 'Basics/Accordion/AccordionItem',
  component: AccordionItem,
} as Meta;

const Template: ComponentStory<typeof AccordionItem> = (args) => (
  <AccordionItem {...args}>
    <AccordionHeader>Item 1</AccordionHeader>
    <AccordionBody>
      Minim proident eu aliqua irure tempor incididunt fugiat. Adipisicing aliquip cillum esse amet.
      Consequat qui consectetur duis laboris aliqua fugiat Lorem eiusmod ut cupidatat excepteur.
      Magna nulla nulla velit voluptate duis nulla quis Lorem dolore labore aliqua sit ipsum.
    </AccordionBody>
  </AccordionItem>
);

export const Controllable = Template.bind({});
Controllable.args = {
  open: false,
  narrow: false,
  indentBody: false,
  preventToggle: false,
};