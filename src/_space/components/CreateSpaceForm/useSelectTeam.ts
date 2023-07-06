import { useState } from 'react';
import { useUserInfo } from '../../../@shared/queries/user';
import { useTeamList } from '../../../@shared/queries/company';
import { TreeProps } from 'antd';

type Props = {
  setFieldValue: (name: string, value: any) => void;
};

export default function useSelectTeam({ setFieldValue }: Props) {
  const { data: currentUser } = useUserInfo();
  const { teamList } = useTeamList(currentUser?.value.company.id);

  const [selectedTeamList, setSelectedTeamList] = useState<
    {
      title: string;
      teamId: number;
      type: 'EDIT' | 'READ' | 'WRITE';
    }[]
  >([]);

  const onCheck: TreeProps['onCheck'] = (checkedKeys, info) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const targetTeamId = info.node.id as number;
    const teamTitle = info.node.title as string;

    const newSelectTeamList = [
      ...selectedTeamList,
      {
        title: teamTitle,
        teamId: targetTeamId,
        type: 'EDIT' as 'EDIT' | 'READ' | 'WRITE',
      },
    ];

    setSelectedTeamList(newSelectTeamList);
    setFieldValue('teamPermissionList', newSelectTeamList);
  };

  const onChangeTeamPermission = (
    targetTeamId: number,
    value: 'EDIT' | 'READ' | 'WRITE',
  ) => {
    const newSelectTeamList = selectedTeamList.map((selectedTeam) => {
      if (selectedTeam.teamId === targetTeamId) {
        return {
          ...selectedTeam,
          type: value,
        };
      }
      return selectedTeam;
    });
    setSelectedTeamList(newSelectTeamList);
    setFieldValue('teamPermissionList', newSelectTeamList);
  };

  const onDeleteSelectTeam = (teamId: number) => {
    const newSelectTeamList = selectedTeamList.filter(
      (selectedTeam) => selectedTeam.teamId !== teamId,
    );
    setSelectedTeamList(newSelectTeamList);
    setFieldValue('teamPermissionList', newSelectTeamList);
  };

  return {
    selectedTeamList,
    onChangeTeamPermission,
    onDeleteSelectTeam,
    onCheck,
  };
}
