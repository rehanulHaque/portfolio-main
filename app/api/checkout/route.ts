import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import Razorpay from "razorpay";

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID!,
  key_secret: process.env.RAZORPAY_KEY_SECRET!,
});
export async function POST(req: NextRequest) {
  try {
    const session = await auth();
    if (!session?.user) {
      return NextResponse.json(
        { error: "Unauthorized", success: false },
        { status: 401 }
      );
    }
    const { productId, amount } = await req.json();
    const order = await razorpay.orders.create({
      amount: Number(amount) * 100,
      currency: "INR",
      receipt: `receipt_#${productId}`,
    });

    await prisma.order.create({
      data: {
        user: {
          connect: {
            id: session.user.id,
          },
        },
        productId: productId,
        amount: amount,
        paymentId: order.id,
        paymentStatus: "PENDING",
      },
    });

    return NextResponse.json(
      { message: "Order created successfully", success: true, order },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message, success: false },
      { status: 400 }
    );
  }
}
