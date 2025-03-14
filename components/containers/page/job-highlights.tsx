export const JobHighLights: React.FC<{
  location: string;
  type: string;
  occupation: string;
  experience: string;
  salary: string;
  jobId: string;
}> = ({ location, type, occupation, experience, salary, jobId }) => {
  return (
    <div className="w-full bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 font-light text-medium mb-10">
      <div className="border-t border-gray-200 dark:border-gray-600">
        <div
          aria-labelledby="stats-tab"
          className="p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800"
        >
          <dl className="grid grid-cols-3 gap-y-10 gap-x-5 mx-auto text-gray-900 dark:text-white ">
            <div className="flex flex-col items-start justify-center">
              <dt className="mb-2 font-bold">Location</dt>
              <dd className="text-gray-500 dark:text-gray-400">{location}</dd>
            </div>
            <div className="flex flex-col items-start justify-center">
              <dt className="mb-2 font-bold">Working Mode</dt>
              <dd className="text-gray-500 dark:text-gray-400">{type}</dd>
            </div>
            <div className="flex flex-col items-start justify-center">
              <dt className="mb-2 font-bold">Occupation Type</dt>
              <dd className="text-gray-500 dark:text-gray-400">{occupation}</dd>
            </div>
            <div className="flex flex-col items-start justify-center">
              <dt className="mb-2 font-bold">Experience</dt>
              <dd className="text-gray-500 dark:text-gray-400">{experience}</dd>
            </div>
            <div className="flex flex-col items-start justify-center">
              <dt className="mb-2 font-bold">Salary</dt>
              <dd className="text-gray-500 dark:text-gray-400">{salary}</dd>
            </div>
            <div className="flex flex-col items-start justify-center">
              <dt className="mb-2 font-bold">Job Id</dt>
              <dd className="text-gray-500 dark:text-gray-400">{jobId}</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};
