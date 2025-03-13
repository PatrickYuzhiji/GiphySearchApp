import { Gif as GiphyGif } from '@giphy/react-components';
import { Card, Button } from 'react-bootstrap';
import React from 'react';

interface GifItemProps {
  gif: any;
}

const GifItem = ({ gif }: GifItemProps) => {
  const handleCopy = () => {
    if (gif) {
      navigator.clipboard.writeText(gif.url);
      alert('Copied to clipboard');
    }
  };

  return (
    <Card className="gifitem">
      <Card.Body className="gifitem-body">
        {gif && <GiphyGif gif={gif} width={300} />}
      </Card.Body>

      <Card.Footer className="gifitem-footer">
        <Button onClick={handleCopy}>Copy Link</Button>
      </Card.Footer>
    </Card>
  );
};

export default GifItem;
