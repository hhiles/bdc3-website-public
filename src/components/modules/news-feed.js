import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { useNews } from "../../hooks";
import { Subheading, Paragraph } from "../typography";

const ArticlePreview = styled.article`
  margin: 1rem;
`;

const ArticleDate = styled.div`
  font-weight: bold;
  color: var(--color-grey);
`;

export const NewsFeedModule = () => {
  const news = useNews();

  return (
    <div>
      {news.map((article) => (
        <ArticlePreview key={article.title}>
          <ArticleDate>{article.date}</ArticleDate>
          <Subheading>{article.title}</Subheading>
          <Paragraph>
            {article.excerpt}
            &nbsp;&nbsp;&nbsp;<Link to={article.path}>Read More</Link>
          </Paragraph>
        </ArticlePreview>
      ))}
    </div>
  );
};
