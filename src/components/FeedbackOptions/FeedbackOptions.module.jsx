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
  &:active {
    box-shadow: inset 1px 1px 2px ${props => props.theme.colors.white},
      inset -1px -1px 2px ${props => props.theme.colors.grey};
  }
`;
