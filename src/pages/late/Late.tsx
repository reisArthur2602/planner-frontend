import { Box } from '../../styles/box';
import { Grid } from '../../styles/grid';
import { Highlight } from '../../styles/highlight';
import { Title } from '../../styles/title';

export const Late = () => {
  return (
    <Box direction="column" gap="24px">
      <Title>
        Tarefas Atrasadas<Highlight>{`(0)`}</Highlight>
      </Title>
      <Grid>...</Grid>
    </Box>
  );
};
