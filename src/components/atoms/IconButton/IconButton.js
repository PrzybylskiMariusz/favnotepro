import styled from 'styled-components';

const IconButton = styled.button`
  display: block;
  width: 67px;
  height: 67px;
  border: none;
  border-radius: 20px;
  background-image: url(${({ icon }) => icon});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 40%;

  &.active {
    background-color: white;
  }
`;

export default IconButton;
