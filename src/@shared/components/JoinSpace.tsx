import styled from '@emotion/styled';
import { useJoinSpace, usePublicSpaces } from '../queries/space';
import { Avatar, Button, List, message } from 'antd';
import { USER_INFO_KEY, useUserInfo } from '../queries/user';
import useModal from './modals/useModal';
import { useQueryClient } from '@tanstack/react-query';

function JoinSpace() {
  const { closeModal } = useModal();
  const { publicSpaceList } = usePublicSpaces();
  const { data: userInfo } = useUserInfo();
  const { mutate } = useJoinSpace();
  const queryClient = useQueryClient();

  if (!publicSpaceList) return <div>공개된 스페이스가 없습니다</div>;
  if (!userInfo) return null;

  const onJoinSpace = (spaceId: number, spaceName: string) => {
    mutate(spaceId, {
      onSuccess: () => {
        queryClient.invalidateQueries([USER_INFO_KEY]);
        message.success(`${spaceName} 스페이스에 참여하였어요.`);
        closeModal();
      },
      onError: () => {
        // something error..
      },
    });
  };

  const { spaceList: joinedSpaceList } = userInfo.value;

  const isJoinedSpace = (spaceId: number) => {
    return joinedSpaceList.some((joinedSpace) => joinedSpace.id === spaceId);
  };

  return (
    <>
      <Block>
        <List
          dataSource={publicSpaceList}
          renderItem={(space) => (
            <List.Item
              key={space.id}
              actions={[
                isJoinedSpace(space.id) ? (
                  <p>참여됨 ✅</p>
                ) : (
                  <Button
                    key="list-loadmore-more"
                    onClick={() => onJoinSpace(space.id, space.name)}
                  >
                    참여
                  </Button>
                ),
              ]}
            >
              <List.Item.Meta
                avatar={<Avatar />}
                title={space.name}
                description={space.description}
              />
            </List.Item>
          )}
        />
      </Block>
    </>
  );
}

export default JoinSpace;

const Block = styled.div`
  height: 500px;
  overflow: auto;
`;
