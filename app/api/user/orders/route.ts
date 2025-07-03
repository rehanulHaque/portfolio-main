import { auth } from "@/auth";
import { getProductById } from "@/hooks";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(){
    try {
        const session = await auth();
        if (!session?.user) {
            return NextResponse.json({ error: "Unauthorized", success: false }, { status: 401 });
        }

        const ordersData = await prisma.order.findMany({
            where: {
                userId: session.user.id,
            },
        });

        const orders = await Promise.all(
            ordersData.map(async (order) => {
                const product = await getProductById(order.productId);
                return {
                    ...order,
                    product,
                };
            })
        );

        return NextResponse.json({ result: orders, success: true }, { status: 200 });
    } catch (error: any) {
        console.log(error.message);
        return NextResponse.json({ error: error.message, success: false }, { status: 500 });
    }
}
