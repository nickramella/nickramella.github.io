'use client';
export default function Home() {

  return (
    <div className="w-full bg-gray-700 rounded-2xl p-6 anim-fade">
      <h1 className="text-[4vw] font-extrabold">About Me...</h1>
      <div className="flex max-h-[80%]">
        <div className="flex justify-center items-center w-[50%]">
          <div className="bg-white rounded-full text-blue-500 flex items-center justify-center text-7xl size-[20vw] max-w-60 max-h-60 border border-blue-400 anim-fade">
            NR
          </div>
        </div>
        <div className="flex-col justify-end w-[50%]">
          <p className="text-[1.8vw] pb-5">
            Software engineer with a background in statistics and data analysis, specializing in full-stack development and cloud-based enterprise platforms. Experience modernizing legacy applications and business intelligence dashboards into scalable, secure, and ADA- and WCAG-compliant solutions. Experience spans front-end frameworks, and backend services while working in an Agile environment.
          </p>
        </div>
      </div>
    </div>
  );
}
