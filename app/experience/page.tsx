import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { FiMapPin, FiAward, FiBriefcase, FiBook } from "react-icons/fi";

export default function ExperiencePage() {
  const data = [
    {
      title: "2021-2024",
      content: (
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-gray-800">
            <FiBook className="w-5 h-5 text-blue-600" />
            <div>
              <h3 className="text-lg font-semibold">Senior High School</h3>
              <div className="flex items-center gap-2 text-gray-600 text-sm mt-1">
                <FiMapPin className="w-4 h-4" />
                <span>Miba Majalengka</span>
              </div>
            </div>
          </div>

          <div className="pl-7">
            <p className="text-gray-600 text-sm leading-relaxed">
              Graduated from Islamic boarding school with the Valedictorian
              honor (Top Graduate), and completed the memorization of 15
              chapters (juz) of the Qur&apos;an
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "Jan 2024 - Present",
      content: (
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-gray-800">
            <FiBriefcase className="w-5 h-5 text-blue-600" />
            <div>
              <h3 className="text-lg font-semibold">
                Associate Engineer | Freelancer
              </h3>
              <div className="flex items-center gap-2 text-gray-600 text-sm mt-1">
                <span className="font-medium">ARABINESIA Company</span>
                <span>•</span>
                <span>Remote</span>
              </div>
            </div>
          </div>

          <div className="pl-7">
            <div className="space-y-3 text-sm text-gray-600">
              <p className="leading-relaxed">
                Full-stack development role focusing on building scalable
                learning platform web applications.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">▹</span>
                  <span>
                    Designed and developed a complete web-based learning
                    platform from scratch to production release.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">▹</span>
                  <span>
                    Built authentication, dashboard, course modules, and admin
                    panel using Next.js and Postgresql as a backend.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">▹</span>
                  <span>
                    Collaborated with UI/UX designer to refine user journey and
                    improve accessibility across devices.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">▹</span>
                  <span>
                    Managed the full development cycle: architecture, coding,
                    deployment, and iteration based on feedback.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Awards and Honors",
      content: (
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-gray-800">
            <FiAward className="w-5 h-5 text-blue-600" />
            <h3 className="text-lg font-semibold">
              Achievements and Certification
            </h3>
          </div>

          <div className="pl-7 space-y-6">
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="flex-shrink-0 w-2 h-2 rounded-full bg-blue-600" />
                <a
                  href="https://drive.google.com/file/d/1geWqNACtRISPsYEGEq9_aOyKyuPCIg1d/edit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <h4 className="text-gray-800 font-medium hover:text-blue-600 transition-colors duration-200 inline-flex items-center gap-1">
                    Dicoding Academy
                    <svg
                      className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </h4>
                </a>
              </div>
              <div className="pl-5">
                <p className="text-gray-600 text-sm leading-relaxed">
                  Has successfully completed coding training on the Intermediate
                  level Front-End Web Developer learning path of the IDCamp 2024
                  program.
                </p>
                <div className="flex gap-2 mt-2">
                  <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                    Front-End
                  </span>
                  <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                    Web Development
                  </span>
                </div>
              </div>
            </div>

            {/* Alibaba Cloud */}
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="flex-shrink-0 w-2 h-2 rounded-full bg-blue-600" />
                <h4 className="text-gray-800 font-medium">Codepolitan</h4>
              </div>
              <div className="pl-5">
                <p className="text-gray-600 text-sm leading-relaxed">
                  Completed the devhandal program organized by Alibaba Cloud x
                  Codepolitan, and received a scholarship + certificate for
                  backend developer.
                </p>
                <div className="flex gap-2 mt-2">
                  <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                    Backend Developer
                  </span>
                  <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                    Web Development
                  </span>
                </div>
              </div>
            </div>
            {/* Alibaba Cloud */}
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="flex-shrink-0 w-2 h-2 rounded-full bg-blue-600" />
                <h4 className="text-gray-800 font-medium">Alibaba Cloud</h4>
              </div>
              <div className="pl-5">
                <p className="text-gray-600 text-sm leading-relaxed">
                  Successfully completed the Alibaba Cloud Certified Developers
                  - 2 AI program.
                </p>
                <div className="flex gap-2 mt-2">
                  <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                    AI
                  </span>
                  <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                    Cloud Engineer
                  </span>
                </div>
              </div>
            </div>
            {/* Cisco Cybersecurity */}
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="flex-shrink-0 w-2 h-2 rounded-full bg-blue-600" />
                <h4 className="text-gray-800 font-medium">Cisco</h4>
              </div>
              <div className="pl-5">
                <p className="text-gray-600 text-sm leading-relaxed">
                  Completed the training program by Cisco and successfully
                  achieved the Certification of the associate cybersecurity.
                </p>
                <div className="flex gap-2 mt-2">
                  <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                    Cybersecurity
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full bg-white">
      <Timeline data={data} />
    </div>
  );
}
