import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect } from "react";
import CourseCard from "../components/CourseCard";
import { useUser } from "../context/UserProvider";
import useFetch from "../hooks/useFectch";

const AvailableCourses = () => {
  const { data, fetchData, isFetching, isError } = useFetch();
  const { user } = useUser();

  

  useEffect(() => {
    const fetch = async () => {
      await fetchData(`/student/notEnrolledCourses/${user.studentID}`, {
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
                type={"NEW"}
              />
            );
          })}

        {data && !isError && !isFetching && data.length === 0 && (
          <Typography fontSize={"2rem"}>No Courses to show !</Typography>
        )}
      </Box>
    </Box>
  );
};

export default AvailableCourses;
