import React, { useState, useEffect, FC } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { StaticContext } from 'react-router';
import { RouteComponentProps } from 'react-router-dom';
import axios, { AxiosResponse } from 'axios';
import {
  Background,
  OptionChainTable,
  Loading,
  RefreshButton,
  FetchError,
} from '../components';
import Search from '../components/util/Search';

import StockProfile from '../components/StockProfile/StockProfile';
import ScrollToTopButton from '../components/ScrollToTopButton/ScrollToTopButton';

type LocationState = {
  userQuery: string | undefined;
};

interface Response {
  underlying: Record<string, unknown>;
  putExpDateMap: Record<string, unknown>;
  callExpDateMap: Record<string, unknown>;
  status: string;
}

const OptionChains: FC<
  RouteComponentProps<Record<string, undefined>, StaticContext, LocationState>
> = (props) => {
  const baseUrl = 'http://localhost:3002/tdAPI';
  const query: string | undefined = props.location.state?.userQuery || '';

  const [searchValidate, setSearchValidate] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [fetchSuccess, setFetchSuccess] = useState<boolean>(false);
  const [underlying, setUnderlying] = useState<Record<string, unknown>>();
  const [putExpDateMap, setPutExpDateMap] = useState<Record<string, unknown>>();
  const [callExpDateMap, setCallExpDateMap] = useState<
    Record<string, unknown>
  >();

  const fetchData: () => void = async () => {
    setIsLoading(true);

    try {
      const axiosRes: AxiosResponse = await axios.get(baseUrl, {
        params: {
          symbol: query,
        },
      });
      const res: Response = axiosRes.data;

      if (res.status === 'FAILED') {
        setFetchSuccess(false);
      } else {
        setFetchSuccess(true);
      }

      setUnderlying(res.underlying);
      setPutExpDateMap(res.putExpDateMap);
      setCallExpDateMap(res.callExpDateMap);
      setIsError(false);
      setIsLoading(false);
    } catch (error) {
      setIsError(true);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (query.match(/([A-Za-z]\.?){1,5}/)) {
      setSearchValidate(true);
      if (!isLoading) {
        fetchData();
      }
    } else {
      setSearchValidate(false);
    }
  }, [query]);

  return (
    <>
      <Background />
      <Container>
        <Col>
          <Row
            style={{
              justifyContent: 'center',
            }}
          >
            <ScrollToTopButton />
          </Row>
          <Row style={{ paddingTop: 20, justifyContent: 'space-between' }}>
            <Search isLoading={isLoading} />
            <RefreshButton fetchData={fetchData} />
          </Row>

          {isLoading && query ? (
            <Loading />
          ) : isError || !searchValidate || !fetchSuccess ? (
            <FetchError />
          ) : (
            <>
              <Row>
                <StockProfile underlying={underlying} />
              </Row>

              <Row>
                <OptionChainTable
                  putExpDateMap={putExpDateMap}
                  callExpDateMap={callExpDateMap}
                />
              </Row>
            </>
          )}
        </Col>
      </Container>
    </>
  );
};

export default OptionChains;
