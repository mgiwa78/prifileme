import styled from "styled-components/macro";

export const LandingContainer = styled.div`
  background-color: #f2f3f6;
  min-height: calc(100vh - 76px);
  min-width: 100vw;
`;
export const LandingBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  flex-direction: column;
  padding-top: 40px;
`;

export const LandingText = styled.h2`
  font-size: 40px;
  font-weight: 600;
  max-height: 80vw;
  padding: 0 20px;
  margin-bottom: 30px;
  text-align: left;
  .landing_highlight {
    background-color: #009688 !important;
    color: white !important;
    text-transform: capitalize;
  }
`;
export const LandingImg = styled.img`
  width: 300px;
`;
export const NavBox = styled.div`
  display: flex;
  align-items: center;

  justify-content: space-between;
`;
