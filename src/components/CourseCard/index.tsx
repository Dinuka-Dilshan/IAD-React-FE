import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../context/UserProvider";
import useFetch from "../../hooks/useFectch";

interface Props {
  title: string;
  description: string;
  id: number;
  type: "Enrolled" | "NEW";
}

const CourseCard: React.FC<Props> = ({ title, description, id, type }) => {
  const navigate = useNavigate();
  const { data, fetchData, isFetching, isError } = useFetch();
  const { user } = useUser();

  const handleEnroll = async () => {
    await fetchData("/student/enroll", {
      type: "POST",
      body: {
        studentID: user.studentID,
        courseID: id,
      },
    });
  };

  useEffect(() => {
    if (data?.message === "OK") {
      navigate(`/dashboard/mycourses/${id}`);
    } else {
    }
  }, [data]);

  return (
    <Box
      display={"flex"}
      flexDirection="row"
      m={"1rem"}
      borderRadius={"0.5rem"}
      border={"2px solid #2162FE"}
    >
      <Box
        width={"40rem"}
        height={"20rem"}
        flex={1.5}
        sx={{
          borderTopLeftRadius: "0.5rem",
          borderBottomLeftRadius: "0.5rem",
          background:
            "url(https://www.europassberlin.com/wp-content/uploads/2020/11/Progetto-senza-titolo-8-1-1440x900.jpg)",
          backgroundSize: "cover",
        }}
      ></Box>
      <Box
        display={"flex"}
        justifyContent="center"
        flexDirection="column"
        gap={4}
        flex={2}
        p={"1rem"}
      >
        <Typography fontSize={"1.3rem"} fontWeight="bold">
          {title}
        </Typography>
        <Typography>{description}</Typography>
        {type === "Enrolled" ? (
          <Box
            display={"flex"}
            justifyContent="flex-end"
            pt={"1rem"}
            boxSizing={"border-box"}
          >
            <Button
              onClick={() => {
                navigate(`/dashboard/mycourses/${id}`);
              }}
            >
              See Content..
            </Button>
          </Box>
        ) : (
          <Box
            display={"flex"}
            justifyContent="flex-end"
            pt={"1rem"}
            boxSizing={"border-box"}
          >
            <Button
              color="success"
              onClick={handleEnroll}
              disabled={isFetching}
            >
              enroll
            </Button>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default CourseCard;
