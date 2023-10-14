import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface CustomerInteractionProps {
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  customerMsg: string;
}

export default function Dashboard() {
  const customerInteractions = [
    {
      customerName: "John Doe",
      customerEmail: "john.doe@customer.com",
      customerPhone: "123-456-7890",
      customerMsg: "I have a question about my order.",
    },
    {
      customerName: "Jane Doe",
      customerEmail: "jane.doe@customer.com",
      customerPhone: "987-654-3210",
      customerMsg: "I need help with the website.",
    },
    {
      customerName: "Max Doe",
      customerEmail: "max.doe@customer.com",
      customerPhone: "456-678-8123",
      customerMsg: "I want a refund.",
    },
    {
      customerName: "Jack Doe",
      customerEmail: "jack.doe@customer.com",
      customerPhone: "678-891-2345",
      customerMsg: "I have a warranty question.",
    },
  ];

  // Add types for customer interactions & update key to random id

  const CustomerInteractions = customerInteractions.map(
    (customerInteraction: CustomerInteractionProps) => {
      return (
        <>
          <div className="flex justify-center items-center w-full">
            <div key={customerInteraction.customerName} className="w-full">
              <div className="p-2">
                <div className="div">
                  <span className="text-lg font-bold">
                    {customerInteraction.customerName}
                  </span>
                </div>
                <div className="hidden lg:flex">
                  <span className="text-slate-400">
                    {customerInteraction.customerEmail}
                  </span>
                </div>
                <div className="hidden lg:flex">
                  <span className="text-slate-400">
                    {customerInteraction.customerPhone}
                  </span>
                </div>
              </div>
              <div className="div">
                <span className="text-lg italic">
                  <span>&quot;{customerInteraction.customerMsg}&quot;</span>
                </span>
              </div>
            </div>
            <div className="">
              <Button variant={"secondary"} className="w-32">Respond</Button>
            </div>
          </div>
        </>
      );
    }
  );

  return (
    <>
      <div className="flex-col py-4 w-full">
        <div className="px-2 flex w-full">
          <Card className="w-full shadow-sm">
            <div className="flex-col w-full justify-center items-center p-3">
              <div className="flex w-full py-2">
                <span className="text-slate-400 text-lg">
                  Total Gross Profit
                </span>
              </div>
              <div className="flex w-full">
                <span className="font-bold text-3xl">$456,330.38</span>
              </div>
              <div className="flex w-full py-2">
                <span className=" text-lg">+15%</span>
              </div>
            </div>
          </Card>
        </div>
        <div className="flex w-full justify-center items-center">
          <div className="w-full grid lg:grid-cols-2 2xl:grid-cols-4 gap-2 p-2">
            <Card className="shadow-sm">
              <div className="flex-col w-full justify-center items-center p-3">
                <div className="flex w-full py-2">
                  <span className="text-slate-400 text-lg">Total Revanue</span>
                </div>
                <div className="flex w-full">
                  <span className="font-bold text-3xl">$85,356.45</span>
                </div>
                <div className="flex w-full py-2">
                  <span className=" text-lg">+12%</span>
                </div>
              </div>
            </Card>
            <Card className="shadow-sm">
              <div className="flex-col w-full justify-center items-center p-3">
                <div className="flex w-full py-2">
                  <span className="text-slate-400 text-lg">Total Orders</span>
                </div>
                <div className="flex w-full">
                  <span className="font-bold text-3xl">500</span>
                </div>
                <div className="flex w-full py-2">
                  <span className=" text-lg">+10%</span>
                </div>
              </div>
            </Card>
            <Card className="shadow-sm">
              <div className="flex-col w-full justify-center items-center p-3">
                <div className="flex w-full py-2">
                  <span className="text-slate-400 text-lg">Inventory</span>
                </div>
                <div className="flex w-full">
                  <span className="font-bold text-3xl">876</span>
                </div>
                <div className="flex w-full py-2">
                  <span className=" text-lg">-2%</span>
                </div>
              </div>
            </Card>
            <Card className="justify-center shadow-sm">
              <div className="flex-col w-full justify-center items-center p-3">
                <div className="flex w-full py-2">
                  <span className="text-slate-400 text-lg">
                    Conversion Rate
                  </span>
                </div>
                <div className="flex w-full">
                  <span className="font-bold text-3xl">3.25%</span>
                </div>
                <div className="flex w-full py-2">
                  <span className=" text-lg">+0.4%</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
        <div className="px-2 flex w-full">
          <Card className="w-full shadow-sm">
            <div className="flex-col w-full justify-center items-center p-3">
              <div className="flex w-full py-2">
                <span className="text-slate-400 text-lg">
                  Customer Interactions
                </span>
              </div>
              <div className="flex-col w-full">{CustomerInteractions}</div>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
}
