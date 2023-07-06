import {
  Avatar,
  Button,
  Divider,
  Form,
  Input,
  List,
  Radio,
  Select,
  Space,
  Tag,
  Tree,
} from 'antd';
import Search from 'antd/es/input/Search';
import useCreateSpaceForm from './useCreateSpaceForm';
import { css } from '@emotion/react';

const { Item } = Form;
const { TextArea } = Input;

const treeData = [
  {
    id: 1,
    title: '휴레이포지티브',
    childList: [
      {
        id: 7,
        title: '글로벌TFT',
        childList: [],
        pid: 1,
      },
      {
        id: 8,
        title: 'PX본부',
        childList: [
          {
            id: 14,
            title: '프로덕트팀',
            childList: [],
            pid: 8,
          },
          {
            id: 15,
            title: '디자인팀',
            childList: [],
            pid: 8,
          },
        ],
        pid: 1,
      },
      {
        id: 9,
        title: '사업본부',
        childList: [
          {
            id: 16,
            title: '품질경영팀',
            childList: [],
            pid: 9,
          },
          {
            id: 17,
            title: '사업개발팀',
            childList: [],
            pid: 9,
          },
        ],
        pid: 1,
      },
      {
        id: 10,
        title: '개발본부',
        childList: [
          {
            id: 11,
            title: 'AI기술팀',
            childList: [],
            pid: 10,
          },
          {
            id: 12,
            title: '서비스개발본부',
            childList: [
              {
                id: 20,
                title: '프론트엔드팀',
                childList: [],
                pid: 12,
              },
            ],
            pid: 10,
          },
          {
            id: 13,
            title: '플랫폼개발본부',
            childList: [
              {
                id: 18,
                title: '메타플랫폼팀',
                childList: [],
                pid: 13,
              },
              {
                id: 19,
                title: '코어플랫폼팀',
                childList: [],
                pid: 13,
              },
            ],
            pid: 10,
          },
        ],
        pid: 1,
      },
    ],
    pid: null,
  },
];

const treeTemp = [
  {
    id: 1,
    pid: null,
    key: '1',
    title: '휴레이포지티브',
    children: [
      {
        id: 10,
        title: '개발본부',
        key: 'b',
        children: [
          {
            id: 11,
            title: 'AI기술팀',
            key: 'c',
            children: [],
            pid: 10,
          },
          {
            id: 12,
            title: '서비스개발본부',
            key: 'd',
            children: [
              {
                id: 20,
                title: '프론트엔드팀',
                key: 'e',
                children: [],
                pid: 12,
              },
            ],
            pid: 10,
          },
          {
            id: 13,
            title: '플랫폼개발본부',
            key: 'f',
            children: [
              {
                id: 18,
                title: '메타플랫폼팀',
                key: 'g',
                children: [],
                pid: 13,
              },
              {
                id: 19,
                title: '코어플랫폼팀',
                key: 'h',
                children: [],
                pid: 13,
              },
            ],
            pid: 10,
          },
        ],
        pid: 1,
      },
    ],
  },
];

function CreateSpaceForm() {
  const {
    onFinishFailed,
    onFinish,
    selectedUserList,
    nonSelectedUserList,
    onDeleteSelectUser,
    onChangeUserPermission,
    onSelectUser,
    selectedTags,
    tagList,
    onDeleteTag,
    onClickTag,
    setIsSearching,
    isSearching,
    form,
    onSearch,
    onChangeSearchText,
    selectedTeamList,
    onChangeTeamPermission,
    onDeleteSelectTeam,
    onCheck,
  } = useCreateSpaceForm();

  return (
    <Form
      form={form}
      labelWrap={true}
      labelCol={{
        span: 4,
      }}
      initialValues={{
        description: '',
        isPublic: true,
        name: '',
        selectedUserList: [],
        tagIdList: [],
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Item label="스페이스 명" name={'name'} required={true}>
        <Input placeholder="스페이스 명" />
      </Item>
      <Item label="스페이스 목적" name={'tagIdList'} required={true}>
        <Space size={[0, 'small']} wrap>
          {selectedTags?.map((tag) => {
            const { id, color, name } = tag;
            return (
              <Tag
                key={id}
                bordered={false}
                color={`#${color}`}
                closable
                onClose={() => onDeleteTag(id)}
              >
                {name}
              </Tag>
            );
          })}
        </Space>
        <Divider />
        <Space size={[0, 'small']} wrap>
          {tagList?.map((tag) => {
            const { id, name, color } = tag;
            return (
              <Tag
                key={id}
                bordered={false}
                color={`#${color}`}
                onClick={() => onClickTag(id)}
              >
                {name}
              </Tag>
            );
          })}
        </Space>
      </Item>
      <Item label="스페이스 공개범위" name={'isPublic'}>
        <Radio.Group>
          <Radio.Button value={true}>Public</Radio.Button>
          <Radio.Button value={false}>Private</Radio.Button>
        </Radio.Group>
      </Item>
      <Item label="팀 권한" name={'teamPermissionList'}>
        <Tree
          checkable
          onCheck={onCheck}
          treeData={treeTemp}
          defaultExpandAll={true}
          style={{
            background: '#f8f8f8',
          }}
        />
        <Divider orientation="left">선택된 팀</Divider>
        <List
          dataSource={selectedTeamList}
          renderItem={(selectedTeam) => (
            <List.Item
              key={selectedTeam.teamId}
              actions={[
                <Select
                  defaultValue="EDIT"
                  style={{ width: 100 }}
                  bordered={false}
                  options={[
                    { value: 'EDIT', label: '수정' },
                    { value: 'READ', label: '읽기 전용' },
                    { value: 'WRITE', label: '관리자' },
                  ]}
                  onSelect={(value) => {
                    // 현재 userId를 이용하여, 유저의 권한(type)을 value 값으로 변경
                    onChangeTeamPermission(
                      selectedTeam.teamId,
                      value as 'EDIT' | 'READ' | 'WRITE',
                    );
                  }}
                />,
                <p
                  onClick={() => onDeleteSelectTeam(selectedTeam.teamId)}
                  key="list-loadmore-more"
                >
                  삭제
                </p>,
              ]}
            >
              <List.Item.Meta
                title={selectedTeam.title}
                css={css`
                  padding: 0 12px;
                `}
              />
            </List.Item>
          )}
          css={css`
            min-width: 600px;
            border: 1px solid #e9ecf0;
            border-radius: 8px;
            background: #fff;
          `}
        />
      </Item>
      <Item label="개인 권한" name={'selectedUserList'}>
        <Search
          placeholder="조직원 이름"
          onChange={onChangeSearchText}
          onSearch={onSearch}
          enterButton
          onFocus={() => setIsSearching(true)}
          onBlur={() => setIsSearching(false)}
        />
        {isSearching && (
          <List
            dataSource={nonSelectedUserList}
            renderItem={(user) => (
              <List.Item
                key={user.userId}
                onMouseDown={() => onSelectUser(user)}
              >
                <List.Item.Meta
                  avatar={<Avatar />}
                  title={user.name}
                  description={user.email}
                  css={css`
                    padding: 0 12px;
                  `}
                />
              </List.Item>
            )}
            css={css`
              position: absolute;
              top: 32px;
              z-index: 99;
              width: 100%;
              border: 1px solid #e9ecf0;
              border-radius: 8px;
              background: #fff;
            `}
          />
        )}
        <Divider orientation="left">선택한 유저</Divider>
        <List
          dataSource={selectedUserList}
          renderItem={(selectedUser) => (
            <List.Item
              key={selectedUser.userId}
              actions={[
                <Select
                  defaultValue="EDIT"
                  style={{ width: 100 }}
                  bordered={false}
                  options={[
                    { value: 'EDIT', label: '수정' },
                    { value: 'READ', label: '읽기 전용' },
                    { value: 'WRITE', label: '관리자' },
                  ]}
                  onSelect={(value) => {
                    // 현재 userId를 이용하여, 유저의 권한(type)을 value 값으로 변경
                    onChangeUserPermission(
                      selectedUser.userId,
                      value as 'EDIT' | 'READ' | 'WRITE',
                    );
                  }}
                />,
                <p
                  onClick={() => onDeleteSelectUser(selectedUser.userId)}
                  key="list-loadmore-more"
                >
                  삭제
                </p>,
              ]}
            >
              <List.Item.Meta
                avatar={<Avatar />}
                title={selectedUser.name}
                description={selectedUser.email}
                css={css`
                  padding: 0 12px;
                `}
              />
            </List.Item>
          )}
          css={css`
            min-width: 600px;
            border: 1px solid #e9ecf0;
            border-radius: 8px;
            background: #fff;
          `}
        />
      </Item>
      <Item label="스페이스 설명" name={'description'} required={true}>
        <TextArea rows={4} />
      </Item>
      <Button type="primary" htmlType={'submit'}>
        Submit
      </Button>
    </Form>
  );
}

export default CreateSpaceForm;
