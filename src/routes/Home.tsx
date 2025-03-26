import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs"

export const Home: React.FC = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Welcome</h1>
      
      <Tabs defaultValue="overview" className="w-full">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          <div className="rounded-lg border p-4">
            <h2 className="text-xl font-semibold mb-2">Overview</h2>
            <p>This is the overview tab content. Here you can see a summary of your data.</p>
          </div>
        </TabsContent>
        <TabsContent value="analytics">
          <div className="rounded-lg border p-4">
            <h2 className="text-xl font-semibold mb-2">Analytics</h2>
            <p>View detailed analytics and metrics in this tab.</p>
          </div>
        </TabsContent>
        <TabsContent value="reports">
          <div className="rounded-lg border p-4">
            <h2 className="text-xl font-semibold mb-2">Reports</h2>
            <p>Generate and view reports from your data here.</p>
          </div>
        </TabsContent>
      </Tabs>

      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>What is Lorem Ipsum?</AccordionTrigger>
          <AccordionContent>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>Why do we use it?</AccordionTrigger>
          <AccordionContent>
            It is a long established fact that a reader will be distracted by the readable 
            content of a page when looking at its layout. The point of using Lorem Ipsum is 
            that it has a more-or-less normal distribution of letters.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger>Where does it come from?</AccordionTrigger>
          <AccordionContent>
            Contrary to popular belief, Lorem Ipsum is not simply random text. 
            It has roots in a piece of classical Latin literature from 45 BC, making it over 
            2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
} 
