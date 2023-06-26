import { Button } from 'antd';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { useUserInfo } from '../../queries/user';
import SidebarItem from './SidebarItem';
import useModal from '../modals/useModal';
import { MODAL_TYPE } from '../ModalManager';

function Sidebar() {
  const { data } = useUserInfo();
  const { openModal } = useModal();

  const handleModalOpen = () => {
    openModal({
      modalType: MODAL_TYPE.JOIN_SPACE,
    });
  };

  if (!data) return null;

  const { spaceList } = data.value;

  return (
    <div css={SidebarStyles}>
      <SidebarGroup>
        {spaceList.map((space) => (
          <SidebarItem key={space.id} spaceData={space} />
        ))}
      </SidebarGroup>
      <Button type="primary" block onClick={handleModalOpen}>
        스페이스 +
      </Button>
    </div>
  );
}

export default Sidebar;

const SidebarGroup = styled.div`
  overflow: auto;
`;

export const SidebarStyles = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 26rem;
  height: 100%;

  background: #ffffff;
  border-radius: 1.2rem;

  padding: 1.5rem 2rem;
  margin-right: 3rem;

  box-shadow: 10px 10px 20px -14px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 10px 10px 20px -14px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 20px -14px rgba(0, 0, 0, 0.75);
`;
