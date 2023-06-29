import { useForm } from 'antd/es/form/Form';
import { useUserInfo } from '../../../@shared/queries/user';
import { useTeamList } from '../../../@shared/queries/company';
import { useCreateSpace } from '../../../@shared/queries/space';
import useTag from './useTag';
import useSearchUserList from './useSearchUser';

type TFormValues = {
  description: string;
  isPublic: boolean;
  name: string;
  selectedUserList: {
    email: string;
    name: string;
    userId: string;
    type: 'EDIT' | 'WRITE' | 'READ';
  }[];
  tagIdList: number[];
};

export default function useCreateSpaceForm() {
  const [form] = useForm();
  const { setFieldValue } = form;

  const { tagList, selectedTags, onClickTag, onDeleteTag } = useTag({
    setFieldValue,
  });

  const {
    selectedUserList,
    nonSelectedUserList,
    onDeleteSelectUser,
    onChangeUserPermission,
    onChangeSearchText,
    setIsSearching,
    onSearch,
    isSearching,
    onSelectUser,
  } = useSearchUserList({
    setFieldValue,
  });

  const { data: currentUser } = useUserInfo();
  const { teamList } = useTeamList(currentUser?.value.company.id);
  const { mutate: mutateCreateSpace } = useCreateSpace();

  const onFinish = (values: TFormValues) => {
    console.log('finish values', values);
    const { description, isPublic, name, selectedUserList, tagIdList } = values;
    const payload = {
      description,
      isPublic,
      name,
      permissionList: selectedUserList.map((user) => ({
        memberId: user.userId,
        type: user.type,
      })),
      tagIdList,
      icon: '', // 현재 아이콘 받는 필드가 없음
    };
    mutateCreateSpace(payload);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return {
    form,
    onFinish,
    onFinishFailed,
    selectedTags,
    onDeleteTag,
    tagList,
    onClickTag,
    onChangeSearchText,
    onSearch,
    setIsSearching,
    isSearching,
    nonSelectedUserList,
    onSelectUser,
    selectedUserList,
    onChangeUserPermission,
    onDeleteSelectUser,
  };
}
