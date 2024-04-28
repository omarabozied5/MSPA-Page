import { Fragment } from "react";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import { Route, useParams } from "react-router-dom";
import NoQuotesFound from "../components/quotes/NoQuotesFound";

const DUMMY_QUOTES = [
  { id: "q1", author: "Omar", text: "Learning React is fun!" },
  { id: "q2", author: "Omar AboZeid", text: "Learning React is great!" },
];
const QuoteDetail = () => {
  const param = useParams();

  const quote = DUMMY_QUOTES.find((quote) => quote.id === param.quoteId);

  if (!quote) {
    return <NoQuotesFound />;
  }
  return (
    <Fragment>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={`/quotes/${param.quoteId}/comment`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;
