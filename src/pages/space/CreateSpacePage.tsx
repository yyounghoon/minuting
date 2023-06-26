import { useForm } from 'antd/es/form/Form';
import { Button, Divider, Form, Input, Radio, Space, Tag } from 'antd';
import Search from 'antd/es/input/Search';
import { useSearchUser, useUserInfo } from '../../@shared/queries/user';
import { useTeamList } from '../../@shared/queries/company';
import { useState } from 'react';
import { useTagList } from '../../@shared/queries/tag';

const { Item } = Form;
const { TextArea } = Input;

function CreateSpacePage() {
  const [form] = useForm();
  const { data: currentUser } = useUserInfo();
  const { teamList } = useTeamList(currentUser?.value.company.id);

  const { searchUserList, mutate } = useSearchUser();

  const { tagList } = useTagList('SPACE');
  const [selectedTagsId, setSelectedTagsId] = useState<number[]>([]);

  const selectedTags = tagList?.filter((tag) => {
    if (selectedTagsId.find((selectedTagId) => selectedTagId === tag.id)) {
      return tag;
    }
    return;
  });

  const onSearch = (name: string) => {
    mutate(name);
  };

  const onClickTag = (tagId: number) => {
    setSelectedTagsId((prev) => [...prev, tagId]);
  };

  const onDeleteTag = (tagId: number) => {
    setSelectedTagsId(selectedTagsId.filter((id) => id !== tagId));
  };

  if (!tagList) return null;

  return (
    <Form
      form={form}
      labelWrap={true}
      labelCol={{
        span: 4,
      }}
    >
      <Item label="스페이스 명">
        <Input placeholder="스페이스 명" />
      </Item>
      <Item label="스페이스 목적">
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
          {tagList.map((tag) => {
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
      <Item label="스페이스 공개범위">
        <Radio.Group>
          <Radio.Button value="horizontal">Public</Radio.Button>
          <Radio.Button value="vertical">Private</Radio.Button>
        </Radio.Group>
      </Item>
      <Item label="팀 권한">
        {/*<Transfer*/}
        {/*  dataSource={mockData}*/}
        {/*  titles={['전체', '선택']}*/}
        {/*  targetKeys={targetKeys}*/}
        {/*  selectedKeys={selectedKeys}*/}
        {/*  onChange={onChange}*/}
        {/*  onSelectChange={onSelectChange}*/}
        {/*  onScroll={onScroll}*/}
        {/*  render={(item) => item.title}*/}
        {/*/>*/}
      </Item>
      <Item label="개인 권한" name={'name'}>
        <Search
          placeholder="input search text"
          onSearch={onSearch}
          enterButton
        />
      </Item>
      <Item label="스페이스 설명">
        <TextArea rows={4} />
      </Item>
      <Button type="primary">Submit</Button>
    </Form>
  );
}

export default CreateSpacePage;
