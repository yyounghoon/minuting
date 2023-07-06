import { Card, Col, Empty, Row, Tag } from 'antd';
import { useRecentMeetingList } from '../../@shared/queries/minutes';
import { useParams } from 'react-router-dom';

function RecentJoinMeetingList() {
  const { id: spaceId } = useParams();
  const { recentMeetingList } = useRecentMeetingList(Number(spaceId));

  if (!recentMeetingList) return null;

  if (recentMeetingList.length < 1) {
    return (
      <Card title={'최근에 참가한 회의들이에요'}>
        {/* 회의록 목록 영역*/}
        <Empty description={false} />
      </Card>
    );
  }

  return (
    <Card title={'최근에 참가한 회의들이에요'}>
      <Row gutter={16}>
        {recentMeetingList.map((meetingInfo) => {
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

export default RecentJoinMeetingList;
