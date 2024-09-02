import User from "@/model/User";
import bcrypt from 'bcrypt'
import { connect } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        await connect()

        const { username, email, password } = await req.json();
        
        const emailExists = await User.findOne({ email });
        if (emailExists) {
            return NextResponse.json({ message: 'Email already exists' }, { status: 400 })
        }
        
        const usernameExists = await User.findOne({ username });
        if (usernameExists) {
            return NextResponse.json({ message: 'Username already exists' }, { status: 400 })
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        await User.create({ email: email, password: hashedPassword, username: username });

        return NextResponse.json({ message: 'Registeration successful' }, { status: 201 })
    } catch (error) {
        return NextResponse(error);
    }
}

