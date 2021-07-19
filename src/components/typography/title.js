import styled from "styled-components";
import PropTypes from "prop-types";

//

export const Title = styled.h1`
  // border: 1px solid #f09;
  margin: 2rem 0 2rem 0;
  line-height: 4rem;
  color: var(--color-eggplant-dark);
  text-align: center;
  border-bottom: 1px solid #ccc;
  @media screen and (min-width: 767px) {
    text-align: left;
    ${props => props.center && "text-align: center;"}
    ${props => props.right && "text-align: right;"}
  }
`;

Title.propTypes = {
  children: PropTypes.node.isRequired
};
