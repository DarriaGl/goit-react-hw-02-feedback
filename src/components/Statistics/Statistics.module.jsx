import styled from '@emotion/styled';
export const List = styled.ul`
  padding: 20px;
  max-width: 320px;
  border-radius: 10px;
`;

export const Item = styled.li`
  display: flex;
  flex-wrap: nowrap;
  &:not(:last-child) {
    margin-bottom: 12px;
  }
`;
