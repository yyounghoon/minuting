import { useParams } from 'react-router-dom';

function SpaceDashBoardPage() {
  const { id: spaceId } = useParams();

  console.log('spaceId', spaceId);

  return <div>스페이스 대시보드</div>;
}

export default SpaceDashBoardPage;
