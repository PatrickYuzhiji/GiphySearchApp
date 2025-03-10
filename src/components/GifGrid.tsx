import { useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import GifItem from './GifItem';
import GifListContext from '../contexts/GifListContext';

function GifGrid() {
  const [GifList, setGifList] = useContext(GifListContext);

  return (
    <div className="gif-grid">
      <Container fluid>
        <Row>
          {GifList &&
            GifList.map((gif: any) => (
              <Col key={gif.id} md={4} lg={4} xl={3}>
                <GifItem gif={gif} />
              </Col>
            ))}
        </Row>
      </Container>
    </div>
  );
}

export default GifGrid;
