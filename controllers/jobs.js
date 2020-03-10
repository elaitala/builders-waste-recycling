const db = require('../models');

// Insert MODULES here
const create = async (req, res) => {
  try {
      console.log('Creating JOB...')
      const createdJob = await db.Job.create({ ...req.body});
      const responseObj = {
          id: createdJob._id,
          jobName: createdJob.jobName,
          client: createdJob.client,
          location: createdJob.location,
          address: createdJob.address,
          city: createdJob.city,
          long: createdJob.long,
          lat: createdJob.lat,
          type: createdJob.type,
          siteContact: createdJob.siteContact,
          trailer: createdJob.trailer,
          droppedDate: createdJob,droppedDate,
          droppedBy: createdJob.droppedBy,
          pickedDate: createdJob.pickedDate,
          pickedBy: createdJob.pickedBy,
          status: createdJob.status,
          price: createdJob.price,
          paid: createdJob.paid
      };
      res.status(200).json(responseObj);
  } catch (error) {
      return res.status(500).json({ message: 'Job CREATE failed...', error: error });
  };
};

module.exports = {
  create
}
