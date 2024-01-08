import type { Meta, StoryObj } from "@storybook/react";

import AddComment from "./AddComment";

const meta: Meta<typeof AddComment> = {
  component: AddComment,
  title: "BePositive/AddComment",
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
