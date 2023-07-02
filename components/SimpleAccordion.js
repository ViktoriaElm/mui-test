import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box';

export default function SimpleAccordion() {
  return (
    <Box
      sx={{
        '& > :not(style)': { mt: 1 },
      }}
      noValidate
      autoComplete="off"
    >
      <Accordion>

        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >

          <Typography>
            <b>Безопасна ли уборка для детей и животных?</b>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Да, уборка безопасна для детей и животных, так как мы используем только экологичные средства для уборки.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>
            <b>Можно ли уборку заказать ночью?</b>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Уборка доступна 24 часа в сутки
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}