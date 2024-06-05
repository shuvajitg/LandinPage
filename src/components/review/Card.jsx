"use client";
import { Card, CardHeader, CardBody, Avatar } from "@nextui-org/react";
import Data from "../../data/data.json";

export default function ReviewCard() {
  return (
    <>
      <h1 className="text-center mt-6 uppercase text-xl underline ">reviews</h1>
      <div className="grid grid-flow-row mt-4 sm:grid-flow-col gap-4 ml-2">
        {Data.map((item) => {
          return item.testimonials.map((item) => {
            return (
              <>
                <div className="grid grid-flow-col gap-4 ">
                  <Card className="max-w-[340px] border-slate-100 border p-4">
                    <CardHeader className="justify-between">
                      <div className="flex gap-2 ">
                        <div className="bg-white items-center rounded-full h-10 w-10">
                          <Avatar
                            isBordered
                            radius="full"
                            size="md"
                            src={item.avtar}
                          />
                        </div>
                        <div className="flex flex-col gap-1 items-start justify-center">
                          <h4 className="text-small font-semibold leading-none text-default-600">
                            {item.name}
                          </h4>
                          <h5 className="text-small tracking-tight text-default-400">
                            @{item.name}
                          </h5>
                        </div>
                      </div>
                    </CardHeader>
                    <CardBody className="px-3 py-0 text-small text-default-400">
                      <p>{item.feedback}</p>
                    </CardBody>
                  </Card>
                </div>
              </>
            );
          });
        })}
      </div>
    </>
  );
}
