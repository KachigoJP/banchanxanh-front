import React, { useState } from "react";
import { Col, Row, Container } from "react-bootstrap";
import { fbDatabase } from "@utils/firebase";
import { ref, update } from "firebase/database";
import { StaticImage } from "gatsby-plugin-image";
import CheckinForm from "@components/event-checkin-form";
import Button from "@components/ui/button";
import {
    SectionArea,
    InfoContentArea,
    InfoContent,
    InfoItem,
    StyledTitle,
    InfoText,
    StyledColunm,
    UnpaidText,
    FormGroup,
    Subtitle,
} from "./style";

const EventTraoArea = () => {
    const [data, setData] = useState(null);

    const onChangeCode = (data) => {
        setData(data);
    };
    const onClick = () => {
        const updates = {};
        updates[
            `11hGnobnblKDEfyHXgz3QwUgEjfXsqpDZ39ONVdJwhNY/DS Tham Gia Trao/${data.Id}`
        ] = {
            ...data,
            num_checkin: data.Member,
        };
        update(ref(fbDatabase), updates);
    };
    return (
        <SectionArea>
            <Container fluid>
                <Row>
                    <Col lg={12}>
                        <StyledColunm>
                            <CheckinForm onChangeCode={onChangeCode} />
                            {data ? (
                                <>
                                    <Subtitle>
                                        Thông tin người tham gia
                                    </Subtitle>
                                    <InfoContentArea>
                                        {data.num_checkin > 0 ? (
                                            <>
                                                <StyledTitle>
                                                    ĐÃ CHECKIN
                                                </StyledTitle>
                                                <StaticImage
                                                    className="icon-img"
                                                    src="../../data/images/shape/line-s1.png"
                                                    alt="Image-Givest"
                                                />{" "}
                                            </>
                                        ) : null}
                                        <InfoItem>
                                            <InfoContent>
                                                <InfoText>
                                                    Mã tham dự: {data.Id}
                                                </InfoText>
                                                <InfoText>
                                                    Họ Tên: {data.Fullname}
                                                </InfoText>
                                                <InfoText>
                                                    Số thành viên: {data.Member}{" "}
                                                    người
                                                </InfoText>
                                                <InfoText>
                                                    Khăn đã đặt: {data.khan} cái
                                                    {data.khan != 0 &&
                                                    data.is_paid_khan == 0 ? (
                                                        <UnpaidText>
                                                            {" "}
                                                            (Chưa thanh toán -{" "}
                                                            {data.khan * 600})
                                                        </UnpaidText>
                                                    ) : null}
                                                </InfoText>
                                                <InfoText>
                                                    Áo đã đặt: {data.ao} cái
                                                    {data.ao != 0 &&
                                                    data.is_paid_ao == 0 ? (
                                                        <UnpaidText>
                                                            {" "}
                                                            (Chưa thanh toán -{" "}
                                                            {data.ao * 2500})
                                                        </UnpaidText>
                                                    ) : null}
                                                </InfoText>
                                                <InfoText>
                                                    Tham gia sự kiện Sách:{" "}
                                                    {data.book_event} suất
                                                </InfoText>
                                                <InfoText>
                                                    Tham gia Trò chơi Rừng
                                                    Thiêng: {data.game_event}{" "}
                                                    suất
                                                </InfoText>
                                            </InfoContent>
                                        </InfoItem>
                                    </InfoContentArea>
                                    {data.num_checkin == 0 ? (
                                        <FormGroup>
                                            <Button
                                                onClick={onClick}
                                                color="gradient"
                                            >
                                                Tham gia
                                            </Button>
                                        </FormGroup>
                                    ) : null}
                                </>
                            ) : null}
                        </StyledColunm>
                    </Col>
                </Row>
            </Container>
        </SectionArea>
    );
};

export default EventTraoArea;
