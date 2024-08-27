import { connectDB } from "@/lib/connectDB";

export const POST = async (request) => {
  const newUser = await request.json();

  try {
    const db = await connectDB();
    const userCollection = db.collection("users");
    const exist = await userCollection.findOne({ email: newUser.email });
    if (exist) {
      return Response.json({ message: "User Exists" }, { status: 304 });
    }
    const resp = await userCollection.insertOne(newUser);
    return Response.json({ message: "User created" }, { status: 200 });
  } catch (error) {
    return Response.json(
      { message: "Something went wrong", error },
      { status: 500 },
    );
  }
};
