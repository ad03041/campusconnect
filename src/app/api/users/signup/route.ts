import { NextRequest, NextResponse } from "next/server";
import connectMongoDB from "../../../../libs/mongodb";
import User from "../../../../models/userSchema";

export async function POST(request: NextRequest) {
  try {
    // Get the data from the request body
    const { userName, email, password } = await request.json();

    // Debug: log the received data
    console.log("Received data:", { userName, email, password });

    // Input validation
    if (!userName || !email || !password) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Connect to MongoDB
    await connectMongoDB();

    // Check if a user already exists with the same email
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 }
      );
    }

    // Create a new user (storing password in plain text)
    const newUser = new User({ userName, email, password });

    // Save the user to the database
    await newUser.save();

    // Debug: log the user creation success
    console.log("User created successfully:", newUser);

    // Return a response with success and user details (exclude password)
    return NextResponse.json(
      { message: "User created successfully", user: { _id: newUser._id, userName: newUser.userName, email: newUser.email } },
      { status: 201 }
    );
  } catch (error: any) {
    // Log any errors that occur during the user creation process
    console.error("Error creating user:", error);
    return NextResponse.json(
      { error: "Failed to create user", details: error.message },
      { status: 500 }
    );
  }
}
