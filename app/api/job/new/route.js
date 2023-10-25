import Job from "@models/job";
import { connectToDB } from "@utils/database";

export const POST = async (request) => {
  const {
    userId,
    companyName,
    jobId,
    position,
    dateApplied,
    city,
    state,
    country,
  } = await request.json();
  console.log(
    "Received data:",
    companyName,
    jobId,
    position,
    dateApplied,
    city,
    state,
    country
  );

  try {
    await connectToDB();
    const newJob = new Job({
      creator: userId,
      companyName,
      jobId,
      position,
      dateApplied,
      city,
      state,
      country,
    });

    await newJob.save();
    console.log("Job saved:", newJob);

    return new Response(JSON.stringify(newJob), { status: 201 });
  } catch (error) {
    return new Response("Failed to create a new job", { status: 500 });
  }
};
