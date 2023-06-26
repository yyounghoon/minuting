import styled from '@emotion/styled';

type SpaceItemProps = {
  spaceName: string;
  spaceId: number;
};

function SpaceItem({ spaceName }: SpaceItemProps) {
  return (
    <Block>
      <b>{spaceName}</b>
      <p>멤버 14명, 기록된 회의 20회</p>
    </Block>
  );
}

export default SpaceItem;

const Block = styled.div`
  margin: 0 10px;
  padding: 5px 10px;

  &:hover {
    color: #fff;
    background-color: #8bb4fd;
    border-radius: 10px;
  }
`;
