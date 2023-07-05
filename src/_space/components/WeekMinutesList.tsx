import { Card, DatePicker, Empty, Input } from 'antd';

const { RangePicker } = DatePicker;
const { Search } = Input;

function WeekMinutesList() {
  return (
    <Card title={'이번 주 회의록'}>
      {/* 회의록 목록 영역*/}
      <Empty description={false} />
    </Card>
  );
}
export default WeekMinutesList;
