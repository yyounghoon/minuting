import { atom } from 'recoil';
import { MODAL_TYPE } from '../components/ModalManager';

export type ModalType = keyof typeof MODAL_TYPE;

export type TModalState = {
  modalType: ModalType;
  modalProps?: any; // 객체형태 | null;
};

export const modalAtom = atom<TModalState[]>({
  key: 'modalAtom',
  default: [],
});
