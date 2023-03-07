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
                                <SubTitle>Join With Us</SubTitle>
                                <Title>
                                    If You Interest! You Can Join With Us{" "}
                                    <span>As A Volunteer.</span>
                                </Title>
                                <Text>
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry. Lorem
                                    Ipsum has been the industry&apos;s standard
                                    dummy text ever since 1500 an when an
                                    unknown printer took a galley of type and
                                    scrambled it to make a type specimen book.
                                    It has survived not only five centuries but
                                    electronic typesetting, remaining
                                    essentially unchanged.
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
