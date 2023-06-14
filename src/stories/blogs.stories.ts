import { Meta, moduleMetadata } from '@storybook/angular';
import { BlogsComponent } from 'src/lib/blogs/blogs.component';

export default {
	title: 'MyComponents/Blogs',
	component: BlogsComponent,
	decorators: []
} as Meta;

const Template = (args: BlogsComponent) => ({
	componet: BlogsComponent,
	props: args
})

export const Blogs = Template.bind({});