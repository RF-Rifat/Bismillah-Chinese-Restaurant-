import { connectionStr } from "@/lib/db";
import { foodList } from "@/lib/model/product";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET() {
  await mongoose.connect(connectionStr);
  const data = await foodList.find();
  return NextResponse.json(data);
}

export async function POST(req) {
  const payLoad = await req.json();
  await mongoose.connect(connectionStr);
  console.log(payLoad);
  let data = new foodList(payLoad);
  const result = data.save();
  return NextResponse.json({ result });
}
export async function DELETE(req) {
  const { id } = await req.json();
  await mongoose.connect(connectionStr);
  const result = await foodList.deleteOne({ _id: id });
  return NextResponse.json({ result });
}
