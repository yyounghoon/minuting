import { ChangeEvent, useState } from 'react';
import { TSearchUser } from '../../../@shared/types';
import { useSearchUser } from '../../../@shared/queries/user';

type Props = {
  setFieldValue: (name: string, value: any) => void;
};

export default function useSearchUserList({ setFieldValue }: Props) {
  const { searchUserList, mutate } = useSearchUser();
  const [isSearching, setIsSearching] = useState(false);
  const [selectedUserList, setSelectedUserList] = useState<TSearchUser[]>([]);

  const onSearch = (name: string) => {
    mutate(name);
  };

  const onChangeSearchText = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    mutate(value);
  };

  const onSelectUser = (user: TSearchUser) => {
    setSelectedUserList((prev) => [
      ...prev,
      {
        ...user,
        type: 'EDIT',
      },
    ]);
    setFieldValue('selectedUserList', [
      ...selectedUserList,
      { ...user, type: 'EDIT' },
    ]);
  };

  const onDeleteSelectUser = (userId: string) => {
    const newSelectUserList = selectedUserList.filter(
      (selectedUser) => selectedUser.userId !== userId,
    );
    setSelectedUserList(newSelectUserList);
    setFieldValue('selectedUserList', newSelectUserList);
  };

  const onChangeUserPermission = (
    userId: string,
    value: 'EDIT' | 'READ' | 'WRITE',
  ) => {
    const newSelectUserList = selectedUserList.map((selectedUser) => {
      if (selectedUser.userId === userId) {
        return {
          ...selectedUser,
          type: value,
        };
      }
      return selectedUser;
    });
    setSelectedUserList(newSelectUserList);
    setFieldValue('selectedUserList', newSelectUserList);
  };

  const nonSelectedUserList = searchUserList?.filter((user) => {
    const isExist = selectedUserList.find(
      (selectedUser) => selectedUser.userId === user.userId,
    );
    return !isExist;
  });

  return {
    searchUserList,
    onChangeSearchText,
    onSearch,
    setIsSearching,
    isSearching,
    nonSelectedUserList,
    onSelectUser,
    selectedUserList,
    onChangeUserPermission,
    onDeleteSelectUser,
  }
}
