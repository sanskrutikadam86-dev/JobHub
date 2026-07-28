import { NextResponse } from "next/server";
import client from "@/lib/mongodb";
import { ObjectId } from "mongodb";
export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    const db = client.db("jobhub");
    const jobs = db.collection("jobs");

    const job = await jobs.findOne({
      _id: new ObjectId(id),
    });

    return NextResponse.json(job);
  } catch (error) {
    return NextResponse.json(
      { message: "Job not found" },
      { status: 404 }
    );
  }
}
export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    const db = client.db("jobhub");
    const jobs = db.collection("jobs");

    await jobs.deleteOne({
      _id: new ObjectId(id),
    });

    return NextResponse.json({
      message: "Job deleted successfully",
    });
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}
export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();

    const db = client.db("jobhub");
    const jobs = db.collection("jobs");

    await jobs.updateOne(
      {
        _id: new ObjectId(id),
      },
      {
        $set: {
          jobTitle: body.jobTitle,
          companyName: body.companyName,
          location: body.location,
          salary: body.salary,
          description: body.description,
        },
      }
    );

    return NextResponse.json({
      message: "Job updated successfully",
    });
  } catch (error) {
    console.error("Update Error:", error);

    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}