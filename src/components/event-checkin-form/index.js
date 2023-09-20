import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { fbDatabase } from "@utils/firebase";
import { ref, onValue } from "firebase/database";
import Button from "@components/ui/button";
import {
    FormArea,
    Form,
    SectionTitle,
    Subtitle,
    Title,
    SectionDec,
    FormGroup,
    Input,
    ErrorText,
} from "./style";

const ComponentForm = (props) => {
    const [errMess, setErrMess] = useState("");
    const onSubmit = (event) => {
        event.preventDefault();
        const eventNumber = event.target.checkin_number.value;
        if (eventNumber.length != 6)
            setErrMess("Vui lòng nhập đúng mã tham gia!");

        const eventCode = `BCX-${eventNumber.padStart(6, 0)}`;
        const starCountRef = ref(
            fbDatabase,
            `11hGnobnblKDEfyHXgz3QwUgEjfXsqpDZ39ONVdJwhNY/DS Tham Gia Trao/${eventCode}`
        );
        onValue(starCountRef, (snapshot) => {
            const data = snapshot.val();
            if (!data) setErrMess("Vui lòng nhập đúng mã tham gia!");
            if (data && data.Id == eventCode) {
                props.onChangeCode(data);
            }
        });
    };

    const onChangeNumber = (event) => {
        setErrMess("");
    };
    return (
        <FormArea>
            <Row>
                <Col lg={12}>
                    <SectionTitle>
                        <SectionDec>Chào Mừng Đến Với Sự Kiện</SectionDec>
                        <Subtitle>TRAO</Subtitle>
                        <SectionDec>
                            Cảm ơn các bạn đã tham gia sự kiện hôm nay cùng
                            chúng mình
                        </SectionDec>
                    </SectionTitle>
                </Col>
            </Row>
            <Row>
                <Col lg={12}>
                    <Form onSubmit={onSubmit} method="post">
                        <Row className="row-gutter-20">
                            <Col lg={12}>
                                <Row>
                                    <FormGroup>
                                        <SectionDec>
                                            Chỉ nhập phần số không nhập "BCX-"
                                        </SectionDec>
                                        <Input
                                            type="number"
                                            name="checkin_number"
                                            placeholder="Mã Số Tham Dự"
                                            maxlength={6}
                                            onChange={onChangeNumber}
                                            // value={checkinNumber}
                                            required
                                        />
                                        <ErrorText>{errMess}</ErrorText>
                                    </FormGroup>
                                </Row>
                            </Col>
                            <Col lg={12}>
                                <FormGroup>
                                    <Button type="submit" color="gradient">
                                        Tìm
                                    </Button>
                                </FormGroup>
                            </Col>
                        </Row>
                    </Form>
                </Col>
            </Row>
        </FormArea>
    );
};

export default ComponentForm;
