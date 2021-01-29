import { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';

function RandomQuote() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  useEffect(() => {
    const result = async () =>
      await fetch(`https://type.fit/api/quotes`)
        .then((response) => {
          return response.json();
        })
        .then((res) => {
          let randomQuote = res[Math.floor(Math.random() * res.length)];
          setQuote(randomQuote.text);
          setAuthor(randomQuote.author);
        })
        .catch((err) => {
          console.log(err);
        });
    result();
  }, []);
  return (
    <div>
      <Card>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p>{quote}</p>
            <footer className="blockquote-footer">
              {author ? '-' + author : null}
            </footer>
          </blockquote>
        </Card.Body>
      </Card>
    </div>
  );
}

export default RandomQuote;
