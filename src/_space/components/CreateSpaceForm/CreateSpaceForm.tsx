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
} from 'antd';
import Search from 'antd/es/input/Search';
import useCreateSpaceForm from './useCreateSpaceForm';
import { css } from '@emotion/react';

const { Item } = Form;
const { TextArea } = Input;

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
      {/*<Item label="팀 권한">*/}
      {/*  <Tree*/}
      {/*    checkable*/}
      {/*    onSelect={onSelect}*/}
      {/*    onCheck={onCheck}*/}
      {/*    treeData={treeData}*/}
      {/*    style={{*/}
      {/*      background: '#f8f8f8',*/}
      {/*    }}*/}
      {/*  />*/}
      {/*</Item>*/}
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
        <Divider orientation="left">선택 유저</Divider>
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
