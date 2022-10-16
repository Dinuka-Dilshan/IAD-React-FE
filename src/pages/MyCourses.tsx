import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect } from "react";
import { Navigate } from "react-router-dom";

import CourseCard from "../components/CourseCard";
import { useUser } from "../context/UserProvider";
import useFetch from "../hooks/useFectch";

const MyCourses = () => {
  const { data, fetchData, isFetching, isError } = useFetch();
  const { user } = useUser();

  useEffect(() => {
    const fetch = async () => {
      if (!user.studentID) return;
      await fetchData(`/student/enrolledCourses/${user.studentID}`, {
        type: "GET",
      });
    };
    fetch();
  }, [user]);

  return (
    <Box display={"flex"} justifyContent="center">
      <Box p={"3rem"} boxSizing={"border-box"} height="100vh">
        {data &&
          !isError &&
          !isFetching &&
          data.map((course: any, id: number) => {
            return (
              <CourseCard
                id={course.courseID}
                title={course.courseName}
                description={course.description}
                key={id}
                type={"Enrolled"}
                image={course.image}
              />
            );
          })}

        {data && !isError && !isFetching && data.length === 0 && (
          <Typography fontSize={"2rem"}>
            You Haven't enrolled To Any Course!
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default MyCourses;
