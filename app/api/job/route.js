import Job from "@models/job";
import { connectToDB } from "@utils/database";

export const GET = async (request) => {
  try {
    await connectToDB();

    const jobs = await Job.find({}).populate("creator");

    return new Response(JSON.stringify(jobs), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch all jobs", { status: 500 });
  }
};
