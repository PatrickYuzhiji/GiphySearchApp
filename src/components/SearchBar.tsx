import React, { useState, useContext, FormEvent } from 'react';
import { Form, FormControl, Button, Row, Col } from 'react-bootstrap';
import TermContext from '../contexts/TermContext';
import PageContext from '../contexts/PageContext';

const SearchBar = () => {
  const [, setTerm] = useContext(TermContext);
  const [, setPage] = useContext(PageContext);
  // local state to store typed input
  const [tempTerm, setTempTerm] = useState('');

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTerm(tempTerm);
    setPage(0);
  };

  return (
    <Form onSubmit={handleSearch} className="search-bar">
      <Row style={{ alignItems: 'center' }}>
        <Col xs={8}>
          <FormControl
            type="search"
            placeholder="Search GIFs..."
            value={tempTerm}
            onChange={(e) => setTempTerm(e.target.value)}
          />
        </Col>
        <Col xs={4}>
          <Button variant="primary" type="submit">
            Search
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default SearchBar;
