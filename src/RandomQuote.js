import { useState, useEffect } from 'react';

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
      <h1>{quote}</h1>
      <h3>{author ? '-' + author : null}</h3>
    </div>
  );
}

export default RandomQuote;
