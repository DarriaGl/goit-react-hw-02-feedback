import styled from '@emotion/styled';
export const Button = styled.button`
  padding: 15px;
  min-width: 80px;
  border-radius: 10px;

  color: gray;
  transition: all 250ms ease-in-out;
  ::first-letter {
    text-transform: uppercase;
  }
  &:not(:last-child) {
    margin-right: 30px;
  }
  &:hover {
    transform: scale(1.1);
  }
`;
