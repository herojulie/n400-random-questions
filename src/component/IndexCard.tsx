import React, {useEffect, useState} from "react";
import Grid from '@mui/material/Unstable_Grid2';
import {Box, Button, Paper, styled} from "@mui/material";

const Item = styled(Paper)(({theme}) => ({
  backgroundColor: 'lightgray',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  fontSize: '30px',
  height: '300px',
  paddingTop: '30px',
  paddingBottom: '30px'
}));

interface Question {
  title: string,
  subtitle: string,
  question: string,
  answer: Array<string>
}

interface IndexCardProps {
  question: Question,
  refresh: () => void,
}

const IndexCard = (props: IndexCardProps) => {
  const {question, refresh} = props;

  const [show, setShow] = useState<boolean>(false);

  useEffect(() => {
    setShow(false);
  }, [question, setShow]);

  const showAnswerButton = (
    <span style={{marginRight: "10px"}}>
      <Button variant="contained"
              size={"large"}
              onClick={() => setShow(!show)}>
        {show ? "Hide" : "Show"}
      </Button>
    </span>
  );

  const refreshButton = (
    <Button variant="contained"
            size={"large"}
            onClick={() => refresh()}>
      Again
    </Button>
  );

  return (
    <Box>
      <Grid container spacing={3}>
        <Grid sm={12}>
          <Item>{question.question}</Item>
        </Grid>
        <Grid sm={12}>
          <Item>{show ? question.answer.join(", ") : ""}</Item>
        </Grid>
        <Grid style={{width: "100%", display: "flex", flexDirection: "row", justifyContent: "center"}}>
          {showAnswerButton}
          {refreshButton}
        </Grid>
      </Grid>
    </Box>
  );
}

export default IndexCard;
