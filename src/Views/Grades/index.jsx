import React from 'react'

const Grades = () => {

    const tableData = [
        {
            title: "Grading Community",
            description: "INTE 31253 - Software Engineering Concepts(20/21)",
            range: '0-100',
            grade: 'A',
            marks: 75,
        },
        {
            title: "Grading Community",
            description: "INTE 31262 - Advanced Web Application Development(20/21)",
            range: '0-100',
            grade: 'B',
            marks: 65,
        },
        {
            title: "Grading Community",
            description: "INTE 31273 - Integrative Programming and Technologies(20/21)",
            range: '0-100',
            grade: 'C',
            marks: 45,
        },
        {
            title: "Grading Community",
            description: "MGTE 31212 - Project Management (20/21)",
            range: '0-100',
            grade: 'A',
            marks: 80,
        },

        {
            title: "Grading Community",
            description: " Course is starredCourse nameGNCT 32216 - Internship (2019/2020)",
            range: '0-100',
            grade: 'C',
            marks: 50,
        },
    ]

  return (
    <>
        {/* NavBar */}
        <div className="">
            <nav class="max-w-[1000px] mx-auto py-4 flex justify-between">
            <h2 className='text-[30px]' >Student Management System</h2>
            <ul class="flex py-4 ">
                <li className='px-4' >
                <a href="/">Home</a>
                </li>
                <li className='px-4' >
                <a className="" href="">Courses</a>
                </li>
                <li className='px-4' >
                <a href="#">Profile</a>
                </li>
            </ul>

            <div className="py-4">
                <input
                type="text"
                name="search"
                className="search"
                placeholder="Search here.."
                />
                <button type="submit" class="searchButton">
                <i class="fa fa-search"></i>
                </button>
            </div>
            </nav>
        </div>
        {/* Sub NavBar */}
        <div className='bg-[#100f10] w-full h-[50px]  justify-left text-white px-40  ' >
            <ul className='flex pt-2' >
                <li className='mx-4 py-2' ><a href="/studentGrade">Grade</a> </li>
            </ul>
        </div>

        {/* Grade */}
        <div className='max-w-[1000px] mx-auto my-4 py-4 pb-8 px-8 bg-gray-100 rounded-md hover:drop-shadow-lg text-left' >
            <table className='w-full' >
                <tr className='py-4' >
                    <th>Module</th>
                    <th>Range</th>
                    <th>Grade</th>
                    <th>Marks</th>
                </tr>
                {tableData.map(data => 
                    <tr className='bg-white border-b ' >
                    <td className='px-4 py-2' >
                        <div>
                            <p>{data.title}</p>
                            <p>{data.description}</p>
                        </div>
                    </td>
                    <td>{data.range}</td>
                    <td>{data.grade}</td>
                    <td>{data.marks}</td>
                </tr>
                )}   
            </table>
        </div>
    </>
  )
}

export default Grades