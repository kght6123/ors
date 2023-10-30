import { Option, Select } from "$/_ui/atoms/select";

export const Fixture = {
  sm: (
    <Select.Transparent size="sm">
      <Option value={2023}>2023年</Option>
      <Option value={2024}>2024年</Option>
      <Option value={2025}>2025年</Option>
    </Select.Transparent>
  ),
  xl: (
    <Select.Transparent size="xl">
      <Option value={6}>7月</Option>
      <Option value={7}>8月</Option>
      <Option value={8}>9月</Option>
    </Select.Transparent>
  ),
};

export default Fixture;
