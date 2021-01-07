/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-return-assign */
/* eslint-disable no-console */
import React, { useState, FC } from 'react';
import { Col, Row, Table, Button, Collapse } from 'react-bootstrap';
import { truncateDigits, fillDecimals } from './formatTableHelpers';

type Props = {
  putExpDateMap: Record<string, unknown>;
  callExpDateMap: Record<string, unknown>;
};

const OptionChainTable: FC<Props> = ({
  putExpDateMap,
  callExpDateMap,
}: Props) => {
  const contractDatesArr = Object.keys(putExpDateMap);

  const results = {};
  const openTableArr = Array(contractDatesArr.length);
  openTableArr.fill(true, 0, 1).fill(false, 1);
  contractDatesArr.forEach((key, i) => {
    results[key] = openTableArr[i];
  });

  const [openTable, setOpenTable] = useState(results);

  const handleCollapseToggle = (date) => {
    const openTableCopy = JSON.parse(JSON.stringify(openTable));
    openTableCopy[date] = !openTable[date];
    setOpenTable(openTableCopy);
  };

  return (
    <Col>
      <Row className="justify-content-center">
        <Col>
          <Row className="justify-content-around" style={{ marginTop: 20 }}>
            <h5 style={{ color: '#ffffff' }}>Calls</h5>
            <h5 style={{ color: '#ffffff' }}>Puts</h5>
          </Row>
          {contractDatesArr.map((date) => {
            return (
              <div key={date}>
                <Row className="justify-content-center">
                  <Button
                    onClick={() => {
                      handleCollapseToggle(date);
                    }}
                    style={{ borderRadius: 0 }}
                    className="text-center"
                    variant="outline-light"
                    block
                  >
                    {date.slice(0, 10)}
                  </Button>
                </Row>

                <Row className="justify-content-center">
                  <Collapse in={openTable[date]}>
                    <div id={`#group-${date}`} style={{ width: '100%' }}>
                      <Table
                        responsive
                        data-sticky-header
                        variant="dark"
                        size="sm"
                        style={{ textAlign: 'center', lineHeight: 0.5 }}
                      >
                        <thead>
                          <tr key={`tr-${date}`}>
                            <th style={{ position: 'sticky', top: 0 }}>
                              OpInt
                            </th>
                            <th style={{ position: 'sticky', top: 0 }}>
                              Change
                            </th>
                            <th style={{ position: 'sticky', top: 0 }}>Last</th>
                            <th style={{ position: 'sticky', top: 0 }}>Vol</th>
                            <th style={{ position: 'sticky', top: 0 }}>Bid</th>
                            <th style={{ position: 'sticky', top: 0 }}>Ask</th>
                            <th style={{ position: 'sticky', top: 0 }}>
                              Strike
                            </th>
                            <th style={{ position: 'sticky', top: 0 }}>Bid</th>
                            <th style={{ position: 'sticky', top: 0 }}>Ask</th>
                            <th style={{ position: 'sticky', top: 0 }}>Vol</th>
                            <th style={{ position: 'sticky', top: 0 }}>Last</th>
                            <th style={{ position: 'sticky', top: 0 }}>
                              Change
                            </th>
                            <th style={{ position: 'sticky', top: 0 }}>
                              OpInt
                            </th>
                          </tr>
                        </thead>

                        <tbody>
                          {Object.keys(putExpDateMap[date]).map((strike) => {
                            const callData = callExpDateMap[date][strike][0];
                            const putData = putExpDateMap[date][strike][0];
                            const callITM = callData.inTheMoney
                              ? '#67737f'
                              : '';
                            const putITM = putData.inTheMoney ? '#67737f' : '';
                            return (
                              <tr key={`${date}${strike}`}>
                                <td style={{ backgroundColor: callITM }}>
                                  {truncateDigits(callData.openInterest)}
                                </td>
                                <td style={{ backgroundColor: callITM }}>
                                  {callData.markChange}
                                </td>
                                <td style={{ backgroundColor: callITM }}>
                                  {fillDecimals(callData.last)}
                                </td>
                                <td style={{ backgroundColor: callITM }}>
                                  {truncateDigits(callData.totalVolume)}
                                </td>
                                <td style={{ backgroundColor: callITM }}>
                                  {fillDecimals(callData.bid)}
                                </td>
                                <td style={{ backgroundColor: callITM }}>
                                  {fillDecimals(callData.ask)}
                                </td>
                                <td
                                  style={{
                                    borderLeft: '1px solid #67737f',
                                    borderRight: '1px solid #67737f',
                                  }}
                                >
                                  {strike}
                                </td>
                                <td style={{ backgroundColor: putITM }}>
                                  {fillDecimals(putData.bid)}
                                </td>
                                <td style={{ backgroundColor: putITM }}>
                                  {fillDecimals(putData.ask)}
                                </td>
                                <td style={{ backgroundColor: putITM }}>
                                  {truncateDigits(putData.totalVolume)}
                                </td>
                                <td style={{ backgroundColor: putITM }}>
                                  {fillDecimals(putData.last)}
                                </td>
                                <td style={{ backgroundColor: putITM }}>
                                  {putData.markChange}
                                </td>
                                <td style={{ backgroundColor: putITM }}>
                                  {truncateDigits(putData.openInterest)}
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </Table>
                    </div>
                  </Collapse>
                </Row>
              </div>
            );
          })}
        </Col>
      </Row>
    </Col>
  );
};

export default OptionChainTable;
