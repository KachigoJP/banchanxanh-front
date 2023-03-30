import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import VolunteerForm from "@components/volunteer-form";
import {
    SectionArea,
    VolunteerFormArea,
    SectionTitle,
    Title,
    SubTitle,
    Text,
} from "./style";

const JoinApplyArea = () => {
    return (
        <SectionArea>
            <Container>
                <Row>
                    <Col lg={12}>
                        <VolunteerFormArea>
                            <SectionTitle>
                                <SubTitle>Tham gia cùng chúng tôi</SubTitle>
                                <Title>Lời mời hợp tác</Title>
                                <Text>
                                    Hiện tại Bàn Chân Xanh hoạt động chính tại 2 quốc gia là Việt Nam và Nhật Bản,
                                    nếu bạn cũng là một người đam mê leo núi và muốn tham gia hỗ trợ mở rộng cho dự án,
                                    dù ở bất kì quốc gia và vùng lãnh thổ nào, hãy chung tay với chúng mình nhé!
                                    Bàn Chân Xanh luôn chờ liên lạc từ các bạn ❤️
                                </Text>
                            </SectionTitle>

                            <VolunteerForm />
                        </VolunteerFormArea>
                    </Col>
                </Row>
            </Container>
        </SectionArea>
    );
};

export default JoinApplyArea;
