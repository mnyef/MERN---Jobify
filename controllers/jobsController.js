const createJob = async (req, res) => {
  res.send('create');
};

const getAllJobs = async (req, res) => {
  res.send('getAllJobs');
};

const updateJob = async (req, res) => {
  res.send('update');
};

const deleteJob = async (req, res) => {
  res.send('delete');
};

const showStats = async (req, res) => {
  res.send('showStats');
};

export { createJob, deleteJob, getAllJobs, updateJob, showStats };
