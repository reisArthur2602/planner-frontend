import styled from 'styled-components';

const Container = styled.main`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled.section`
  max-width: 30.9375rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;
const TitleSubtitleBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 2rem;
    font-weight: 700;
  }
  p {
    font-size: 18px;
    font-weight: 500;
    color: var(--violet-text-200);
  }
`;

const QrCodeArea = styled.div`
  display: flex;
  justify-content: center;
`;

export { Box, TitleSubtitleBox, Container, QrCodeArea };
