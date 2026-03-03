import { Container, Row, Col } from "reactstrap";
import Sidebar from "../../components/Sidebar";
import Feed from "../../components/Feed";
import Rightbar from "../../components/Rightbar";
import Topbar from "../../components/TopBar";

export default function Home() {
  return (
    <>
      <Topbar />

      <Container fluid className="mt-3">
        <Row>
          {/* Left Sidebar */}
          <Col lg="3" md="4" className="d-none d-md-block">
            <Sidebar />
          </Col>

          {/* Feed */}
          <Col lg="6" md="8" xs="12">
            <Feed />
          </Col>

          {/* Right Sidebar */}
          <Col lg="3" className="d-none d-lg-block">
            <Rightbar />
          </Col>
        </Row>
      </Container>
    </>
  );
}
