import { motion } from "framer-motion";
const stats = [
  {
    number: "3+",
    title: "Projects Built",
  },
  {
    number: "18+",
    title: "Technologies",
  },
  {
    number: "7",
    title: "Testing Types",
  },
  {
    number: "80.87%",
    title: "BCA Score",
  },
];

const ProfileCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 80 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      className="w-[430px] rounded-[40px] border border-white/40 bg-white/35 backdrop-blur shadow-2xl p-8"
    >
      {/* Profile Image */}

      <div className="flex justify-center">
        <div className="relative">
          <div className="h-64 w-64 rounded-full overflow-hidden border-[6px] border-white shadow-xl">
            <img
              src="/profile.jpeg"
              alt="Juhi Gupta"
              className="h-full w-full object-cover"
            />
          </div>

              </div>
      </div>

      {/* Name */}

      <div className="text-center mt-8">

        <h2 className="text-2xl font-bold text-slate-800">
          Juhi Gupta
        </h2>

        <p className="mt-2 text-slate-500 text-sm">
          BCA Graduate • Developer & QA
        </p>

      </div>

      {/* Stats */}

      <div className="grid grid-cols-2 gap-4 mt-10 ">

        {stats.map((item) => (
          <motion.div
            whileHover={{
              scale: 1.05,
            }}
            key={item.title}
            className="rounded-3xl bg-white/70 p-6 shadow-md "
          >
            <h3 className=" font-bold text-blue-600 text-xl">
              {item.number}
            </h3>

            <h3 className="text-slate-500 mt-2 ">
              {item.title}
            </h3>
          </motion.div>
        ))}

      </div>
    </motion.div>
  );
};

export default ProfileCard;