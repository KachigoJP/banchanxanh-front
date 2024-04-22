import React, { useState } from "react";
import { Col, Row, Container, Table } from "react-bootstrap";
import { fbDatabase } from "@utils/firebase";
import * as firebase from "firebase/database";
import { StaticImage } from "gatsby-plugin-image";
import CheckinForm from "@components/event-checkin-form";
import Button from "@components/ui/button";
import { SectionArea, StyledColunm } from "./style";

const EventTraoArea = () => {
    const [startTime, setstartTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [deltaTime, setDeltaTIme] = useState(0);
    const [deltaTime15, setDeltaTime15] = useState(0);
    const [runnerData, setRunnerData] = useState({});
    const [recordData, setRecordData] = useState({});
    const [runner15Data, setRunner15Data] = useState({});
    const [runner25Data, setRunner25Data] = useState({});
    const [ranking15, setRanking15] = useState({
        first: null,
        second: null,
        third: null,
    });
    const [ranking25, setRanking25] = useState({
        first: null,
        second: null,
        third: null,
    });

    const startTime25 = 1713656963748;
    const startTime15 = 1713657601275;

    React.useEffect(() => {
        const runnerRef = firebase.ref(fbDatabase, "runner");
        firebase.onValue(runnerRef, (snapshot) => {
            const data = snapshot.val();
            if (!!data) {
                setRunnerData(data);
            } else {
                console.log("Runner Data not found");
            }
        });

        const recordRef = firebase.ref(fbDatabase, "records");
        firebase.onValue(recordRef, (snapshot) => {
            const data = snapshot.val();
            if (!!data) {
                setRecordData(data);
            } else {
                console.log("Record Data not found");
            }
        });
    }, []);

    // Solving Runner
    React.useEffect(() => {
        if (runnerData) {
            const runner15 = {};
            const runner25 = {};
            Object.keys(runnerData).forEach((id) => {
                const runner = runnerData[id];
                if (runner.marathon == "15") runner15[runner.uid] = runner;
                else if (runner.marathon == "25") runner25[runner.uid] = runner;
            });

            setRunner15Data(runner15);
            setRunner25Data(runner25);
        }
    }, [runnerData]);

    // Solving Record
    React.useEffect(() => {
        const record15 = [];
        const record25 = [];
        const runnerSolved = {};
        Object.keys(recordData).forEach((id) => {
            const runner = recordData[id];
            if (!runnerSolved[runner.uid] || id < runnerSolved[runner.uid]) {
                if (runner15Data[runner.uid] != null) {
                    record15.push(id);
                    runner15Data[runner.uid].record = id;
                } else if (runner25Data[runner.uid] != null) {
                    record25.push(id);
                    runner25Data[runner.uid].record = id;
                }
                runnerSolved[runner.uid] = id;
            }
        });

        setRanking15(processRanking(record15, runner15Data));
        setRanking25(processRanking(record25, runner25Data));
    }, [runnerData, recordData, runner15Data, runner25Data]);

    React.useEffect(() => {
        if (!isRunning) {
            return;
        }
        var id = setInterval(() => {
            var delta = new Date() - startTime25;
            var delta15 = new Date() - startTime15;
            setDeltaTIme(delta);
            setDeltaTime15(delta15);
        }, 1);
        return () => clearInterval(id);
    }, [isRunning]);

    const onClickStartStop = () => {
        if (isRunning) {
            setIsRunning(false);
        } else {
            const now = new Date().valueOf();
            setIsRunning(true);
            setstartTime(now);
            const timeRef = firebase.ref(fbDatabase, `time/${now}`);
            firebase.set(timeRef, "start_time");
        }
    };

    const showTimer = (ms) => {
        if (ms < 0 || isNaN(ms)) return 0;

        const milliseconds = Math.floor((ms % 1000) / 10)
            .toString()
            .padStart(2, "0");
        const second = Math.floor((ms / 1000) % 60)
            .toString()
            .padStart(2, "0");
        const minute = Math.floor((ms / 1000 / 60) % 60)
            .toString()
            .padStart(2, "0");
        const hour = Math.floor((ms / 1000 / 60 / 60) % 60)
            .toString()
            .padStart(2, "0");

        return hour + ":" + minute + ":" + second + ":" + milliseconds;
    };

    const processRanking = (records, runnerData) => {
        const recordSorted = records.sort();

        // First
        const first = recordSorted[0]
            ? runnerData[recordData[recordSorted[0]].uid]
            : {};
        first.record = recordSorted[0];

        // Second
        const second = recordSorted[1]
            ? runnerData[recordData[recordSorted[1]].uid]
            : {};
        second.record = recordSorted[1];

        // Third
        const third = recordSorted[2]
            ? runnerData[recordData[recordSorted[2]].uid]
            : {};
        third.record = recordSorted[2];

        return {
            first,
            second,
            third,
        };
    };

    return (
        <SectionArea>
            <Container fluid>
                {/* Timer */}
                <Row>
                    <Col lg={12}>
                        <StyledColunm>
                            <Button onClick={onClickStartStop}>
                                {isRunning ? "Stop" : "Start"}
                            </Button>
                            {isRunning ? (
                                <h1>Start Time: {showTimer(deltaTime)}</h1>
                            ) : null}
                        </StyledColunm>
                    </Col>
                </Row>
                <Row>
                    <Col lg={12}>
                        <StyledColunm>
                            {isRunning ? (
                                <h1>Start Time 15: {showTimer(deltaTime15)}</h1>
                            ) : null}
                        </StyledColunm>
                    </Col>
                </Row>

                <Row>
                    <Col lg={6}>
                        <StyledColunm>
                            <div>
                                <h1>Xếp hạng 15km</h1>
                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th>Hạng</th>
                                            <th>Họ Tên</th>
                                            <th>BIB</th>
                                            <th>Thành tích</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Hạng Nhất</td>
                                            <td>
                                                {ranking15?.first?.full_name}
                                            </td>
                                            <td>{ranking15?.first?.bib}</td>
                                            <td>
                                                {showTimer(
                                                    ranking15?.first?.record -
                                                        startTime15
                                                )}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Hạng Nhì</td>
                                            <td>
                                                {ranking15?.second?.full_name}
                                            </td>
                                            <td>{ranking15?.second?.bib}</td>
                                            <td>
                                                {showTimer(
                                                    ranking15?.second?.record -
                                                        startTime15
                                                )}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Hạng Ba</td>
                                            <td>
                                                {ranking15.third?.full_name}
                                            </td>
                                            <td>{ranking15.third?.bib}</td>
                                            <td>
                                                {showTimer(
                                                    ranking15?.third?.record -
                                                        startTime15
                                                )}
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                        </StyledColunm>
                    </Col>
                    <Col lg={6}>
                        <StyledColunm>
                            <div>
                                <h1>Xếp hạng 25km</h1>
                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th>Hạng</th>
                                            <th>Họ Tên</th>
                                            <th>BIB</th>
                                            <th>Thành tích</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Hạng Nhất</td>
                                            <td>
                                                {ranking25.first?.full_name}
                                            </td>
                                            <td>{ranking25.first?.bib}</td>
                                            <td>
                                                {showTimer(
                                                    ranking25?.first?.record -
                                                        startTime25
                                                )}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Hạng Nhì</td>
                                            <td>
                                                {ranking25.second?.full_name}
                                            </td>
                                            <td>{ranking25.second?.bib}</td>
                                            <td>
                                                {showTimer(
                                                    ranking25?.second?.record -
                                                        startTime25
                                                )}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Hạng Ba</td>
                                            <td>
                                                {ranking25.third?.full_name}
                                            </td>
                                            <td>{ranking25.third?.bib}</td>
                                            <td>
                                                {showTimer(
                                                    ranking25?.third?.record -
                                                        startTime25
                                                )}
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                        </StyledColunm>
                    </Col>
                </Row>
                <Row>
                    <Col lg={6}>
                        <StyledColunm>
                            {/* 15KM Table */}
                            <div>
                                <h1>15KM</h1>
                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Họ Tên</th>
                                            <th>BIB</th>
                                            <th>Cự Ly</th>
                                            <th>Thành tích</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Object.keys(runner15Data).map(
                                            (item, index) => (
                                                <tr key={`runner15_${index}`}>
                                                    <td>{index + 1}</td>
                                                    <td>
                                                        {
                                                            runner15Data[item]
                                                                .full_name
                                                        }
                                                    </td>
                                                    <td>
                                                        {runner15Data[item].bib}
                                                    </td>
                                                    <td>
                                                        {
                                                            runner15Data[item]
                                                                .marathon
                                                        }
                                                    </td>
                                                    <td>
                                                        {showTimer(
                                                            runner15Data[item]
                                                                ?.record -
                                                                startTime15
                                                        )}
                                                    </td>
                                                </tr>
                                            )
                                        )}
                                    </tbody>
                                </Table>
                            </div>
                        </StyledColunm>
                    </Col>
                    <Col lg={6}>
                        <StyledColunm>
                            <div>
                                <h1>25KM</h1>
                                {/* 25KM Table */}
                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Họ Tên</th>
                                            <th>BIB</th>
                                            <th>Cự Ly</th>
                                            <th>Thành tích</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Object.keys(runner25Data).map(
                                            (item, index) => (
                                                <tr key={`runner25_${index}`}>
                                                    <td>{index + 1}</td>
                                                    <td>
                                                        {
                                                            runner25Data[item]
                                                                .full_name
                                                        }
                                                    </td>
                                                    <td>
                                                        {runner25Data[item].bib}
                                                    </td>
                                                    <td>
                                                        {
                                                            runner25Data[item]
                                                                .marathon
                                                        }
                                                    </td>
                                                    <td>
                                                        {showTimer(
                                                            runner25Data[item]
                                                                ?.record -
                                                                startTime25
                                                        )}
                                                    </td>
                                                </tr>
                                            )
                                        )}
                                    </tbody>
                                </Table>
                            </div>
                        </StyledColunm>
                    </Col>
                </Row>
            </Container>
        </SectionArea>
    );
};

export default EventTraoArea;
