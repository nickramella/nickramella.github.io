"use client";
import DemoModal from '@/components/DemoModal'
import PayComparison from '@/components/PayComparison'
import { selectIsSmallScreen } from '@/lib/rootSlice';
import { useSelector } from 'react-redux';

const page = () => {
  const isSmallScreen = useSelector(selectIsSmallScreen);
  return (
    <div className="h-screen">
      <div className={`my-25 ${isSmallScreen ? "mx-3" : "mx-10"} anim-fade`}>
        <DemoModal title="Payroll Comparison">
          <PayComparison />
        </DemoModal>
      </div>
    </div>
  )
}

export default page