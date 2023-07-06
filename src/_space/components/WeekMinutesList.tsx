import { Card, Col, DatePicker, Empty, Input, Row, Tag } from 'antd';
import { useWeekMinutesList } from '../../@shared/queries/minutes';
import { useParams } from 'react-router-dom';

const { RangePicker } = DatePicker;
const { Search } = Input;

function WeekMinutesList() {
  const { id: spaceId } = useParams();
  const { weekMinutesList } = useWeekMinutesList(Number(spaceId));

  if (!weekMinutesList) return null;

  if (weekMinutesList.length < 1) {
    return (
      <Card title={'이번 주 회의록'}>
        {/* 회의록 목록 영역*/}
        <Empty description={false} />
      </Card>
    );
  }

  return (
    <Card title={'이번 주 회의록'}>
      <Row gutter={16}>
        {weekMinutesList.map((meetingInfo) => {
          const { id, title, contents, createdAt, updatedAt, tagList } =
            meetingInfo;
          return (
            <Col span={8} key={id}>
              <Card
                title={title}
                bordered={false}
                extra={<p>최근 수정된 날짜: {updatedAt}</p>}
              >
                {tagList.map((tag) => (
                  <Tag key={id} bordered={false} color={`#${tag.color}`}>
                    {tag.name}
                  </Tag>
                ))}
              </Card>
            </Col>
          );
        })}
      </Row>
    </Card>
  );
}

export default WeekMinutesList;
