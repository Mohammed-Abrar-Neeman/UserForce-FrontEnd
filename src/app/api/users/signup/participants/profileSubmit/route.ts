import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/participants/userModel";
import participantProfileSchema from "@/models/participants/profileModel";
import { NextRequest, NextResponse } from "next/server"
import { getDataFromToken } from "@/helper/getDataFromToken";

connect();
// Calls the connect function to establish a connection to the database.

export async function POST(request: NextRequest) {
  console.log("inside api participants profile submit");

  // Defines an asynchronous POST request handler.
  try {
    const reqBody = await request.json();
    const {jobTitle,seniority, skills, workemail, company, companysize, worksetting, industry, smallbusinessowner, linkedinprofile, facebookprofile, otherprofile, age, city, gender, income, education, maritalstatus, language, homeowner, webcam} = reqBody;
    console.log(jobTitle, seniority, skills, workemail, company, companysize, worksetting, industry, smallbusinessowner, linkedinprofile, facebookprofile, otherprofile, age, city, gender, income, education, maritalstatus, language, homeowner, webcam);
    // Parses the request body to extract gender.

    // Extract user ID from the authentication token
    const userId = await getDataFromToken(request);
    console.log(userId);

    //Checks if a user with the provided email already exists.
    const user = await User.findOne({ _id: userId }).select("-password");
    console.log(user);

    //If no, returns a 400 response.
    if (!user) {
      return NextResponse.json({ error: "User not exists" }, { status: 400 });
    }

    const email = user.email;
    console.log(email);
    const userProfile = new participantProfileSchema({
      email,
      jobTitle,
      seniority,
      skills, workemail, company, companysize, worksetting, industry, smallbusinessowner, linkedinprofile, facebookprofile, otherprofile, age, city, gender, income, education, maritalstatus, language, homeowner, webcam
    });

    // Saves the new user profile to the database.
    const savedProfile = await userProfile.save();

    // Update user properties and save the changes
    user.isProfileSubmitted = true;
    await user.save();

    return NextResponse.json({
      message: "profile saved successfully",
      success: true,
      savedProfile,
    });

  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
