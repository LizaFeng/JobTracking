"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import Form from "@components/Form";

const TrackJob = () => {
  const router = useRouter();
  const { data: session } = useSession();

  const [submitting, setIsSubmitting] = useState(false);

  const [post, setPost] = useState({
    companyName: "",
    jobId: "",
    position: "",
    dateApplied: new Date(),
    city: "",
    state: "",
    country: "",
  });

  const TrackJob = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/job/new", {
        method: "POST",
        body: JSON.stringify({
          companyName: post.companyName,
          userId: session?.user.id,
          jobId: post.jobId,
          position: post.position,
          dateApplied: post.dateApplied,
          city: post.city,
          state: post.state,
          country: post.country,
        }),
      });

      if (response.ok) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form
      type="Create"
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={TrackJob}
    />
  );
};

export default TrackJob;
