import { Select, Option } from "$/_ui/atoms/select";
import React from "react";

export const Fixture = {
  accent: (
    <Select.Transparent>
      <Option value={6}>7月</Option>
      <Option value={7}>8月</Option>
      <Option value={8}>9月</Option>
    </Select.Transparent>
  ),
};

export default Fixture;
