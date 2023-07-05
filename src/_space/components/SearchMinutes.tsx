import { Card, DatePicker, Empty, Form, Input, Row, Select } from 'antd';

const { RangePicker } = DatePicker;
const { Search } = Input;

function SearchMinutes() {
  return (
    <Card title={'회의록 검색'}>
      <Form>
        <Row>
          <Form.Item>
            <RangePicker placeholder={['시작 날짜', '종료 날짜']} />
          </Form.Item>
          <Form.Item>
            <Select
              placeholder={'카테고리 선택'}
              defaultValue="lucy"
              style={{ width: 120 }}
              options={[{ value: 'lucy', label: 'Lucy' }]}
            />
          </Form.Item>
          <Form.Item>
            <Search
              placeholder="input search text"
              onSearch={() => console.log('search')}
              enterButton
            />
          </Form.Item>
          <Form.Item>
            <Select
              placeholder={'태그 선택'}
              defaultValue="lucy"
              style={{ width: 120 }}
              options={[{ value: 'lucy', label: 'Lucy' }]}
            />
          </Form.Item>
        </Row>
      </Form>
      {/* 회의록 목록 영역*/}
      <Empty description={false} />
    </Card>
  );
}
export default SearchMinutes;
