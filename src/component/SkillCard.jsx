

const SkillCard = ({ title, percentage, skills, icon: Icon }) => {
  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-7 shadow-lg transition hover:-translate-y-1 hover:shadow-xl">
      <div className="flex gap-5">
        {/* Percentage */}
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-blue-100 font-bold text-blue-600">
          {percentage}
        </div>

        <div className="flex-1">
          <div className="mb-4 flex items-center gap-2">
            <Icon className="text-blue-600" size={22} />
            <h2 className="text-2xl font-semibold">{title}</h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-gray-200 bg-gray-50 px-4 py-1 text-sm text-gray-700"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
  

export default SkillCard;