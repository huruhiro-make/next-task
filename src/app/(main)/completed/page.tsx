import TaskCard from "@/components/TaskCard/TaskCard"
import { TaskDocument } from "@/models/task";


const getCompletedTasks = async (): Promise<TaskDocument[]> => {
  const response = await fetch(`${process.env.API_URL}/tasks/completed`,{
    cache: 'no-store',
  });

  if(response.status !== 200) {
    throw new Error();
  }

  const date = await response.json();
  return date.tasks as TaskDocument[];
};

const CompletedTaskPage = async () => {
  const CompletedTasks = await getCompletedTasks();
    return(
        <div className="text-gray-800 p-8 h-full overflow-y-auto pd-24">
          <header className="flex justify-between items-center">
            <h1 className="text-2xl font-bold flex items-center">Completed Tasks</h1>
          </header>
          <div className="mt-8 flex-wrap gap-4">
            {CompletedTasks.map((task) => (
              <TaskCard key={task._id} task={task} /> 
              ))}
          </div>
        </div>
      )
}

export default CompletedTaskPage
