import Job from "@models/job";
import { connectToDB } from "@utils/database";

export const GET = async (request, { params }) => {
  try {
    await connectToDB();

    const job = await Job.findById(params.id).populate("creator");
    if (!job) return new Response("job Not Found", { status: 404 });

    return new Response(JSON.stringify(job), { status: 200 });
  } catch (error) {
    return new Response("Internal Server Error", { status: 500 });
  }
};

export const PATCH = async (request, { params }) => {
  const { job, tag } = await request.json();

  try {
    await connectToDB();

    // Find the existing job by ID
    const existingjob = await Job.findById(params.id);

    if (!existingjob) {
      return new Response("job not found", { status: 404 });
    }

    // Update the job with new data
    existingjob.job = job;
    existingjob.tag = tag;

    await existingjob.save();

    return new Response("Successfully updated the jobs", { status: 200 });
  } catch (error) {
    return new Response("Error Updating job", { status: 500 });
  }
};

export const DELETE = async (request, { params }) => {
  try {
    await connectToDB();

    // Find the job by ID and remove it
    await Job.findByIdAndRemove(params.id);

    return new Response("job deleted successfully", { status: 200 });
  } catch (error) {
    return new Response("Error deleting job", { status: 500 });
  }
};
