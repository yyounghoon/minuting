import { useSetRecoilState } from 'recoil';
import { modalAtom, TModalState } from '../../recoilAtoms/modalAtoms';

function useModal() {
  const setModalAtom = useSetRecoilState(modalAtom);
  const openModal = ({ modalType, modalProps = null }: TModalState) => {
    setModalAtom((prev) => {
      return [...prev, { modalType, modalProps }];
    });
  };

  const closeModal = () => {
    setModalAtom((prev) => prev.slice(0, prev.length - 1));
  };

  return {
    openModal,
    closeModal,
  };
}

export default useModal;
