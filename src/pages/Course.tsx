import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ResourceCard from "../components/ResourceCard";
import useFetch from "../hooks/useFectch";

const Course = () => {
  const id = useParams().id;
  const { data, fetchData, isFetching, isError } = useFetch();

  useEffect(() => {
    const fetch = async () => {
      await fetchData(`/course/${id}`, { type: "GET" });
    };
    fetch();
  }, []);

  

  return (
    <Box p={"1rem"}>
      <Typography fontSize={"2rem"} fontWeight={"bold"}>
        {data?.courseName.toUpperCase()}
      </Typography>
      <Typography mt={"2rem"}>{data?.description}</Typography>

      <Typography mt={"2rem"} fontSize={"1.5rem"} color={"primary.main"}>
        Resources
      </Typography>
      <Box m={"1rem"} mt={"2rem"} boxSizing={"border-box"}>
        {data?.resources.map((resource: any, id: number) => {
          return (
            <ResourceCard
              key={id}
              name={resource.name}
              addedOn={resource.addedOn}
              link={resource.link}
            />
          );
        })}
      </Box>
    </Box>
  );
};

export default Course;
