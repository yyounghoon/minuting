import { Card, Col, Empty, Row } from 'antd';
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
          const { id, title, contents, createdAt, tagList } = meetingInfo;
          return (
            <Col span={8} key={id}>
              <Card title={title} bordered={false} extra={<p>{createdAt}</p>}>
                <p>{contents}</p>
                {/*<p>태그</p>*/}
              </Card>
            </Col>
          );
        })}
      </Row>
    </Card>
  );
}

export default RecentJoinMeetingList;
