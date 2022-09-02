import { Meta, moduleMetadata } from '@storybook/angular';
import { WallComponent } from 'src/lib/wall/wall.component';



export default {
	title: 'MyComponents/wall',
	component: WallComponent,
	decorators: []
} as Meta;

const Template = (args: WallComponent) => ({
	componet: WallComponent,
	props: args
})

export const Wall = Template.bind({});