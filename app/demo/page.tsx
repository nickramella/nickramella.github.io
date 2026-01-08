import DemoModal from '@/components/DemoModal'
import PayComparison from '@/components/PayComparison'

const page = () => {
  return (
    <div className="h-screen">
      <div className="my-25 mx-30 anim-fade">
        <DemoModal title="Payroll Comparison">
          <PayComparison />
        </DemoModal>
      </div>
    </div>
  )
}

export default page