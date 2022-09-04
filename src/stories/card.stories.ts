import { Meta, moduleMetadata } from '@storybook/angular';
import { CardComponent } from 'src/lib/card/card.component';



export default {
	title: 'MyComponents/card',
	component: CardComponent,
	decorators: []
} as Meta;

const Template = (args: CardComponent) => ({
	componet: CardComponent,
	props: args
})

export const Card = Template.bind({});