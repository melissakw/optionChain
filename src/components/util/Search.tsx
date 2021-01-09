import React, { useEffect, useState, FC } from 'react';
import { Link } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import { BsPrefixProps } from 'react-bootstrap/esm/helpers';

interface IFormControl extends BsPrefixProps {
  value: string;
}

type Props = {
  isLoading: boolean;
};

const Search: FC<Props> = ({ isLoading }: Props) => {
  const [query, setQuery] = useState<string>('');
  const [clicked, setClicked] = useState<boolean>(false);

  useEffect(() => {
    if (!isLoading || clicked) {
      setQuery('');
    }
  }, [isLoading, clicked]);

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
                onClick={() => setClicked(!clicked)}
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
