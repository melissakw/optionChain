/* eslint-disable arrow-body-style */
/* eslint-disable react/jsx-boolean-value */
/* eslint-disable no-console */
import React, { useState, FC } from 'react';
import { Link } from 'react-router-dom';
import { Col, Row, Form, FormControl, Button } from 'react-bootstrap';
import { BsPrefixProps } from 'react-bootstrap/esm/helpers';

interface IFormControl extends BsPrefixProps {
  value: string;
}

type Props = {
  isLoading: boolean;
};

const Search: FC<Props> = ({ isLoading }: Props) => {
  const [query, setQuery] = useState('');
  console.log('SEARCH QUERY:', query);

  // const handler = () => new Promise<void>((resolve) => setTimeout(() => resolve(), 3000));

  return (
    <Form>
      <Row style={{ marginBottom: '10px' }}>
        <Col className="col-auto">
          <FormControl
            type="text"
            placeholder="Enter stock"
            onChange={(e: React.FormEvent<IFormControl>) => {
              setQuery(e.currentTarget.value);
            }}
            value={query}
          />
          <Form.Text id="searchHelpBlock" muted>
            Enter an optionable stock (ex. AAPL)
          </Form.Text>
        </Col>
        <Col className="col-auto">
          <Link
            to={{
              pathname: '/optionchain',
              state: {
                userQuery: query,
              },
            }}
          >
            {isLoading ? (
              <Button
                type={'submit'}
                role={'button'}
                variant={'outline-light'}
                style={{ marginBottom: '20px' }}
                disabled
              >
                Search
              </Button>
            ) : (
              <Button
                type={'submit'}
                role={'button'}
                variant={'outline-light'}
                style={{ marginBottom: '20px' }}
              >
                Search
              </Button>
            )}
          </Link>
        </Col>
      </Row>
    </Form>
  );
};

export default Search;
