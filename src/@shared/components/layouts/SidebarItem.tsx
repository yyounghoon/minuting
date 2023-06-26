import { css } from '@emotion/react';
import palette from '../../../styles/palette';
import { Space } from '../../types';
import { Link, useParams } from 'react-router-dom';

type SidebarItemProps = {
  spaceData: Space;
};

function SidebarItem({ spaceData }: SidebarItemProps) {
  const { id: spaceId, name: spaceName, boardList } = spaceData;
  const { id: routerSpaceId } = useParams();
  const isSelected = spaceId === Number(routerSpaceId);

  const goToBoard = (boardId: number) => {
    // router.push(`/space/${spaceId}/board/${boardId}`);
  };

  return (
    <>
      <Link css={ItemStyle(isSelected)} to={`/space/${spaceId}`}>
        {spaceName}
      </Link>
      {boardList.map((board) => {
        const { id: boardId, name: boardName } = board;
        return (
          <div
            key={boardId}
            css={css`
              padding: 2rem;
              font-size: 1.4rem;
              background: ${palette.grey};
              cursor: pointer;
            `}
            onClick={() => goToBoard(boardId)}
          >
            {boardName}
          </div>
        );
      })}
    </>
  );
}

export default SidebarItem;

const ItemStyle = (isSelected: boolean) => css`
  width: 100%;
  height: 5rem;

  display: flex;
  align-items: center;

  padding: 1rem;
  border-radius: 0.5rem;
  cursor: pointer;

  color: #8e98a4;
  font-size: 1.6rem;
  font-weight: 500;

  :hover {
    color: ${palette.black};
    font-weight: 700;
  }

  ${isSelected &&
  css`
    color: ${palette.black};
    font-weight: 700;
  `}
`;
