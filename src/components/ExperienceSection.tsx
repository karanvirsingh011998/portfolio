
import { Building2, Calendar } from 'lucide-react'; // Adjust according to your icon imports

interface ExperienceCardProps {
  jobTitle: string;
  companyName: string;
  duration: string;
  companyUrl: string;
  responsibilities: string[];
  techStack: string[];
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  jobTitle,
  companyName,
  duration,
  companyUrl,
  responsibilities,
  techStack
}) => {
  return (
    <div className="max-w-3xl mx-auto bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm z-10">
      <div className="flex flex-col lg:flex-row items-start gap-4">
        <div className="p-3 bg-blue-500/10 rounded-lg">
          <Building2 className="w-8 h-8 text-blue-400" />
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">{jobTitle}</h3>
          <div className="flex items-center gap-2 text-gray-400 mb-4">
            <Calendar className="w-4 h-4" />
            <span>{duration}</span>
          </div>
          <h4 className="text-lg text-blue-400 mb-3">
            <a href={companyUrl} target="_blank" rel="noopener noreferrer">{companyName}</a>
          </h4>
          <ul className="space-y-2 text-gray-300">
            {responsibilities.map((responsibility, index) => (
              <li key={index}>• {responsibility}</li>
            ))}
          </ul>
          {/* Tech Stack */}
          <div className="mt-4">
                  <strong className="text-gray-400">Tech Stack:</strong>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {techStack.map((tech, i) => (
                      <span key={i} className="px-3 py-1 text-sm bg-blue-500/10 text-blue-400 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
