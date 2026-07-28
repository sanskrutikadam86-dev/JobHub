import { NextRequest, NextResponse } from "next/server";
import client from "@/lib/mongodb";
import jwt from "jsonwebtoken";

export async function GET(req: NextRequest) {
  try {
    const token = req.cookies.get("token")?.value;

    if (!token) {
      return NextResponse.json(
        { message: "Unauthorized" },
        { status: 401 }
      );
    }

    const user: any = jwt.verify(
      token,
      process.env.JWT_SECRET!
    );

    const db = client.db("jobhub");

    const jobsCollection = db.collection("jobs");
    const applicationsCollection =
      db.collection("applications");

    // JOB SEEKER
    if (user.role === "jobseeker") {

      const totalJobs =
        await jobsCollection.countDocuments();

      const totalApplications =
        await applicationsCollection.countDocuments({
          email: user.email,
        });

      return NextResponse.json({
        totalJobs,
        totalApplications,
      });
    }

    // RECRUITER

    const jobsPosted =
      await jobsCollection.countDocuments({
        recruiterEmail: user.email,
      });

    const recruiterJobs =
      await jobsCollection
        .find({
          recruiterEmail: user.email,
        })
        .toArray();

    const jobIds =
      recruiterJobs.map((job: any) =>
        job._id.toString()
      );

    const applicants =
      await applicationsCollection.countDocuments({
        jobId: {
          $in: jobIds,
        },
      });

    const pending =
      await applicationsCollection.countDocuments({
        jobId: {
          $in: jobIds,
        },
        status: "Pending",
      });

    const hired =
      await applicationsCollection.countDocuments({
        jobId: {
          $in: jobIds,
        },
        status: "Hired",
      });

    return NextResponse.json({
      jobsPosted,
      applicants,
      pending,
      hired,
    });

  } catch (error) {

    console.log(error);

    return NextResponse.json(
      {
        message: "Something went wrong",
      },
      {
        status: 500,
      }
    );
  }
}