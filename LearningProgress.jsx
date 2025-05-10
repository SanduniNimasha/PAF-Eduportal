import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';



const WorkoutPlan = ({ user }) => {
  const [workoutPlans, setWorkoutPlans] = useState([]);

  const navigate = useNavigate();


  useEffect(() => {
    const fetchWorkoutPlans = async () => {
      try {
        const res = await axios.get("http://localhost:8080/learningProgress");
        if (res.status === 200) {
          setWorkoutPlans(res.data);
        }
      } catch (error) {
        toast.error("Failed to fetch progress");
      }
    };
    fetchWorkoutPlans();
  }, []);

  // Delete Workout Plans by ID
  const deleteWorkOutPlan = async (workoutplans) => {
    try {
      await axios.delete(
        `http://localhost:8080/learningProgress/${workoutplans.progressId}`
      );

      setWorkoutPlans((prevWokoutPlans) =>
        prevWokoutPlans.filter((wp) => wp.progressId !== workoutplans.progressId)
      );

      toast.success("Progress deleted successfully");
    } catch (error) {
      toast.error("Failed to delete progress");
    }
  };


  const navigateEditPage = (workoutplans) => {
    navigate(`/CreateWorkoutPlan/${workoutplans.progressId}`);
  };

  // Function to handle click event
  // const goToWorkoutPlan = () => {
  //   navigate('/CreateWorkoutPlan'); // Use the route you want to navigate to
  // };

  return (
    <div
      className="container mx-auto p-4 min-h-screen flex flex-col items-center"
      style={{ backgroundColor: '#e3f2fd' }}
    >
      <div className="flex flex-col items-center w-full mb-8 mt-4">
        <div className="flex items-center gap-3 mb-2">
          <img src="https://cdn-icons-png.flaticon.com/512/3135/3135755.png" alt="Education" className="h-12 w-12" />
          <h1 className="text-4xl font-extrabold text-blue-800 tracking-tight font-serif drop-shadow-md">Learning Progress</h1>
        </div>
        <div className="w-32 h-1 bg-gradient-to-r from-blue-400 via-yellow-300 to-blue-400 rounded-full mb-2"></div>
        <p className="text-blue-700 font-medium text-lg italic">Celebrate your achievements and keep moving forward! 🎓</p>
      </div>

      <div className="space-y-8 flex justify-center flex-col items-center">
        {workoutPlans.map((workoutplans, index) => (
          <div
            key={index}
            className="relative bg-gradient-to-br from-yellow-50 via-blue-50 to-yellow-100 shadow-xl rounded-2xl p-6 w-full max-w-xl border-2 border-blue-200 ring-1 ring-blue-100 transition-transform duration-200 hover:scale-[1.02] hover:shadow-2xl"
          >
            <div className="absolute -top-6 -left-6 bg-blue-200 rounded-full p-2 shadow-md">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 7v-6m0 0L3 9m9 5l9-5" />
              </svg>
            </div>
            <div className="flex justify-between ">
              <div className="flex gap-3">
                <div>
                  <img
                    src={workoutplans?.userProfile}
                    alt="user"
                    className="w-14 h-14 rounded-full"
                  />
                </div>
                <div>
                  <h2 className="text-lg font-semibold">
                    {workoutplans?.username}
                  </h2>
                  <p className="text-sm font-bold mb-2">
                    Progress on {workoutplans.date}
                  </p>
                </div>
              </div>
              <div className="gap-3 flex">
                {user?.id === workoutplans?.userId && (
                  <>
                    <AiFillDelete
                      size={20}
                      color="red"
                      className="cursor-pointer"
                      onClick={() => deleteWorkOutPlan(workoutplans)}
                    />
                    <AiFillEdit
                      size={20}
                      color="blue"
                      className="cursor-pointer"
                      onClick={() => navigateEditPage(workoutplans)}
                    />
                  </>
                )}
              </div>
            </div>

            <div>
              <div className="list-disc pl-5 space-y-1 mt-2">
                <h2 className="text-xl font-semibold mb-2">
                  {workoutplans.title}
                </h2>
                
                <p className="font-medium">
                Tutorials : {workoutplans.tutorials}
                </p>               
                <p className="text-sm">Skills: {workoutplans.skills}</p>
                <p className="text-sm italic">"{workoutplans.description}"</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


export default WorkoutPlan;
