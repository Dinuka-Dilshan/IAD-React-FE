import { Grid, Typography } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";

interface Props {
  name: string;
  addedOn: number;
  link: string;
}

const ResourceCard: React.FC<Props> = ({ name, addedOn, link }) => {
  return (
    <Grid
      container
      p={"1rem"}
      bgcolor={"primary.main"}
      color={"white"}
      borderRadius="1rem"
      my={'2rem'}
    >
      <Grid item xs={6}>
        <Typography>{name}</Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography>{addedOn}</Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography>
          <a href={link} target='blank'>
            <DownloadIcon sx={{color:'white'}}/>
          </a>
        </Typography>
      </Grid>
    </Grid>
  );
};

export default ResourceCard;
