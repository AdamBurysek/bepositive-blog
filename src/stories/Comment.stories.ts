import type { Meta, StoryObj } from "@storybook/react";

import Comment from "./Comment";

const meta: Meta<typeof Comment> = {
  component: Comment,
  title: "BePositive/Comment",
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
