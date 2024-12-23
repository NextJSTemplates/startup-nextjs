import Table from "@/components/Database/table";
 
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/Ui/tabs";
import React from "react";

function Database() {
  const tables = ["user", "account", "session"];
  return (
    <section className="relative z-10 overflow-hidden pb-16 pt-36 md:pb-20 lg:pb-28 lg:pt-[180px] p-10">    <Tabs defaultValue={Object.keys(tables)[0]} className="w-full">
      <TabsList defaultValue = {tables[0]} className=" w-full flex   dark:bg-gray-dark">
        {tables.map((tableName) => (
          <TabsTrigger className=" flex-1 text-center" key={tableName} value={tableName}>
            {tableName}
          </TabsTrigger>
        ))}
      </TabsList>
      {tables.map((tableName) => (
        <TabsContent className="  00 " key={tableName} value={tableName}>
          <Table name={tableName} />
        </TabsContent>
      ))}
    </Tabs>
    </section>


  );
}

export default Database;
