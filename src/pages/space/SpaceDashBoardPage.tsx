import { useParams } from 'react-router-dom';
import { useUserInfo } from '../../@shared/queries/user';
import SearchMinutes from '../../_space/components/SearchMinutes';
import WeekMinutesList from '../../_space/components/WeekMinutesList';
import RecentJoinMinutesList from '../../_space/components/RecentJoinMinutesList';
import { Space } from 'antd';

function SpaceDashBoardPage() {
  const { id: spaceId } = useParams();
  const { data: userInfo } = useUserInfo();

  return (
    <>
      <Space direction={'vertical'} size={8} style={{ width: '100%' }}>
        <WeekMinutesList />
        <RecentJoinMinutesList />
        <SearchMinutes />
      </Space>
    </>
  );
}

export default SpaceDashBoardPage;
