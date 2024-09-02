import Blog from "@/model/Blog";
import bcrypt from "bcrypt"
import { connect } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req) {
    await connect()
    const accessToken = req.headers.get("authorization")
    const token = accessToken.split(" ")[1]

    const decodedToken = verifyJwtToken(token)

    if (!accessToken || !decodedToken) {
        return new NextResponse.json({ message: "Unauthorized" }, { status: 403 });
    }

    try {
        const body = await req.json()
        const newBlog = await Blog.create(body)

        return new NextResponse.json(newBlog, { status: 201 })
    } catch (error) {
        return new NextResponse.json({ message: error.message }, { status: 500 })
    }
}



