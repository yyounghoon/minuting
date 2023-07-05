import { Card, Empty } from 'antd';

function RecentJoinMinutesList() {
  return (
    <Card title={'최근의 참가한 회의들이에요'}>
      {/* 회의록 목록 영역*/}
      <Empty description={false} />
    </Card>
  );
}
export default RecentJoinMinutesList;
