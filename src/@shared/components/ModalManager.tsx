import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { modalAtom } from '../recoilAtoms/modalAtoms';
import JoinSpaceModal from './modals/JoinSpaceModal';

export const MODAL_TYPE = {
  JOIN_SPACE: 'JOIN_SPACE',
} as const;

const MODAL_COMPONENTS = {
  [MODAL_TYPE.JOIN_SPACE]: JoinSpaceModal,
};

function ModalManager() {
  const modalList = useRecoilValue(modalAtom);

  useEffect(() => {
    const element = document.getElementById('default-layout');
    if (element) {
      element.style.overflow = modalList.length > 0 ? 'hidden' : 'auto';
    }

    return () => {
      if (element) {
        element.style.overflow = 'auto';
      }
    };
  }, [modalList]);

  if (modalList.length === 0) {
    return null;
  }

  const renderModal = modalList.map(({ modalType, modalProps }) => {
    const ModalComponent = MODAL_COMPONENTS[modalType];
    return <ModalComponent key={modalType} {...modalProps} />;
  });

  return <div>{renderModal}</div>;
}

export default ModalManager;
