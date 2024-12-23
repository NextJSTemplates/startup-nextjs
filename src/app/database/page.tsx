import Table from "@/components/Database/table";
 
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/Ui/tabs";
import React from "react";

function Database() {
  const tables = ["user", "account"];
  return (
    <section className="relative z-10 overflow-hidden pb-16 pt-36 md:pb-20 lg:pb-28 lg:pt-[180px] p-10">    <Tabs defaultValue={Object.keys(tables)[0]} className="w-full">
      <TabsList defaultValue = {tables[0]} className="grid w-full grid-cols-2">
        {tables.map((tableName) => (
          <TabsTrigger key={tableName} value={tableName}>
            {tableName}
          </TabsTrigger>
        ))}
      </TabsList>
      {tables.map((tableName) => (
        <TabsContent key={tableName} value={tableName}>
          <Table name={tableName} />
        </TabsContent>
      ))}
    </Tabs>
    </section>


  );
}

export default Database;
