import styled from '@emotion/styled';
import SpaceItem from './SpaceItem';
import { usePublicSpaces } from '../queries/space';

function JoinSpace() {
  const { data: publicSpaceList } = usePublicSpaces();

  if (!publicSpaceList) return <div>공개된 스페이스가 없습니다</div>;

  return (
    <>
      <Block>
        {publicSpaceList.list.map((space) => (
          <SpaceItem key={space.id} spaceId={space.id} spaceName={space.name} />
        ))}
      </Block>
    </>
  );
}

export default JoinSpace;

const Block = styled.div`
  height: 500px;
  overflow: auto;
`;
