import styled from '@emotion/styled';
export const List = styled.ul`
  padding: 10px;
  border: 3px solid #fea639;
  background-color: #fcd19c;
  border-radius: 10px;
`;

export const Item = styled.li`
  display: flex;
  flex-wrap: nowrap;
  &:not(:last-child) {
    margin-bottom: 12px;
  }
`;
