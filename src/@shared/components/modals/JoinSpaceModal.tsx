import { Button, Modal } from 'antd';
import useModal from './useModal';
import JoinSpace from '../JoinSpace';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

function JoinSpaceModal() {
  const { closeModal } = useModal();
  const navigate = useNavigate();

  const goToCreateSpace = () => {
    closeModal();
    navigate('/space/create');
  };

  return (
    <Modal
      centered
      title="공개된 스페이스 참가"
      open={true}
      maskClosable={true}
      footer={null}
      closable={true}
      onCancel={closeModal}
    >
      <JoinSpace />
      <CreateSpace type={'primary'} onClick={goToCreateSpace}>
        스페이스 만들기
      </CreateSpace>
    </Modal>
  );
}

export default JoinSpaceModal;

const CreateSpace = styled(Button)`
  width: 100%;
`;
