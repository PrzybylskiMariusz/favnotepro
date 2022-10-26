import styled from 'styled-components';

const IconButton = styled.button`
  width: 67px;
  height: 67px;
  border: none;
  border-radius: 20px;
  background-image: url(${({ icon }) => icon});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 40%;
  background-color: ${({ active }) => (active ? 'white' : 'transparent')};
`;

export default IconButton;