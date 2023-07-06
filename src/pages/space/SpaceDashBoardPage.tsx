import { useParams } from 'react-router-dom';
import { useUserInfo } from '../../@shared/queries/user';
import SearchMinutes from '../../_space/components/SearchMinutes';
import WeekMinutesList from '../../_space/components/WeekMinutesList';
import { Space } from 'antd';
import RecentJoinMeetingList from '../../_space/components/RecentJoinMinutesList';

function SpaceDashBoardPage() {
  const { id: spaceId } = useParams();
  const { data: userInfo } = useUserInfo();

  return (
    <>
      <Space direction={'vertical'} size={8} style={{ width: '100%' }}>
        <WeekMinutesList />
        <RecentJoinMeetingList />
        <SearchMinutes />
      </Space>
    </>
  );
}

export default SpaceDashBoardPage;
