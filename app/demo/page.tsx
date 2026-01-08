"use client";
import DemoModal from "@/components/DemoModal"
import PayComparison from "@/components/PayComparison"
import { selectIsSmallScreen } from "@/lib/rootSlice";
import { useSelector } from "react-redux";

const page = () => {
  const isSmallScreen = useSelector(selectIsSmallScreen);
  return (
    <div className="h-screen">
      <div className={`my-25 ${isSmallScreen ? "mx-3" : "mx-10"} anim-fade`}>
        <div className="p-4">
          <h1 className="text-4xl font-bold">Demos</h1>
          <h2 className="text-lg font-bold">You can play around with some samples of my work here.</h2>
        </div>
        <DemoModal
          title="Payroll Comparison"
          description={`Here is a heavily simplified version of a payroll comparison widget I've worked on for an HR Portal. Click the button ${isSmallScreen? "above" : "to the left"} and start the demo. 
            You can select a date and create a randomly generated pay stub for that date and then compare that stub to either itself or another pay stub. There is no limit to the amount of pay stubs you can create for a specific date.`}
        >
          <PayComparison />
        </DemoModal>
      </div>
    </div>
  )
}

export default page