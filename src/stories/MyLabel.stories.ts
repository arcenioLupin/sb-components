import { Meta, StoryObj } from "@storybook/react";
import { MyLabel } from "../components/MyLabel";

const meta = {
    title: 'UI/Labels/MyLabel',
    component: MyLabel,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered'
    },
    argTypes:{
        size: { control: 'select'},
        fontColor: { control: 'color'}
    }
} satisfies Meta<typeof MyLabel>;

export default meta;

type Story = StoryObj<typeof meta>

export const Basic: Story = {
    args:{
        label: 'Basic label',
        size: 'normal'
    }
};

export const AllCaps: Story = {
    args:{
        label: 'All caps label',
        size: 'normal',
        allCaps: true
    }
};

export const Secondary: Story = {
    args:{
       
        label: 'Secondary label',
        size: 'normal',
        color: 'text-secondary'
    }
};

export const CustomColon: Story = {
    args:{
        label: 'Custom color label',
        size: 'normal',
        fontColor: '#3df001'
    }
};

