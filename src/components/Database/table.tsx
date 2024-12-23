import prisma from "@/lib/prisma"; // Ensure this is the correct path to your Prisma client
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type TableProps = {
  name: string; // The name of the Prisma model
};

export default async function Table({ name }: TableProps) {
  // Validate that the model exists in Prisma
  if (!prisma[name as keyof typeof prisma]) {
    throw new Error(`Model ${name} does not exist in Prisma schema.`);
  }

  // Fetch data dynamically from the model
  const model = prisma[name  ];
  const items = await model.findMany();

  // Dynamically extract fields (keys) from the first item
  const fields = items.length > 0 ? Object.keys(items[0]) : [];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="capitalize">{name}</CardTitle>
        <CardDescription>
          Displaying data from <span className="capitalize">{name}</span> table
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className=" overflow-x-auto w-full">
          
        <table className="min-w-full border-collapse border border-gray-300 text-sm">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-dark">
              {fields.map((field) => (
                <th
                  key={field}
                  className="border border-gray-300 px-4 py-2 text-left capitalize"
                >
                  {field}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {items.map((item, idx) => (
              <tr key={idx} className="   hover:bg-gray-50 hover:text-slate-900">
                {fields.map((field) => (
                  <td
                    key={field}
                    className="border max-w-24  border-gray-300 px-4 py-2"
                  >
                   <p className=" line-clamp-2"> {String(item[field as keyof typeof item])} </p> 
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div></CardContent>
    </Card>
  );
}
