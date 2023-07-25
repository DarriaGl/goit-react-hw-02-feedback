import styled from '@emotion/styled';
export const Button = styled.button`
  padding: 15px;
  min-width: 80px;
  border-radius: 10px;
  border: 3px solid #fea639;
  background-color: #fcd19c;
  color: gray;
  transition: all 250ms ease-in-out;
  ::first-letter {
    text-transform: uppercase;
  }
  &:not(:last-child) {
    margin-right: 15px;
  }
  &:hover {
    transform: scale(1.1);
  }
`;
