import { Col, Row } from 'antd';

function PlaygroundPage() {
  return (
    <div>
      <Row gutter={24}>
        <Col style={{ background: 'orange' }} span={8}>
          <p>1번</p>
        </Col>
        <Col style={{ background: 'orange' }} span={8}>
          <p>1번</p>
        </Col>
        <Col style={{ background: 'orange' }} span={8}>
          <p>1번</p>
        </Col>
      </Row>
    </div>
  );
}

export default PlaygroundPage;
