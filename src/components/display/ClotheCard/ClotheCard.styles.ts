import styled from "styled-components";

export const ClotheCardRoot = styled.img`
  width: 0px;
  flex-grow: 1;
  object-fit: cover;
  opacity: 0.8;
  transition: 0.5s ease;

  &:hover {
    width: 4rem;
    opacity: 1;
    filter: contrast(120%);
    cursor: pointer;
  }
`;
