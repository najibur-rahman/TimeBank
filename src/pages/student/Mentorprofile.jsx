import React from "react";
import { Footer } from "./footer";
import { Link, useNavigate } from "react-router-dom";

export const Mentorprofile = () => {

  const navigate = useNavigate();
  const mentor = {
    name: "Najibur Rahman",
    title: "Senior React Developer at TechCorp • 8+ years teaching experience",
    rating: 4.9,
    students: 347,
    experience: "8 years",
    satisfaction: "96%",
    earned: "$ 8,250",
    bio: "Hello! I'm Najibur Rahman, a Senior React Developer with over 8 years of experience building web applications. I've worked with startups and Fortune 500 companies, and I'm passionate about teaching. My teaching style is hands-on and project-based.",
    email: "najibur931@gmail.com",
    phone: "+8801790838525",
    location: "Sylhet, Bangladesh",
    skills: ["Python", "Data Science", "Machine Learning", "Pandas", "Data Visualization", "SQL", "Scikit-learn"],
    packages: [
      { id: 1, title: "Python for Beginners", price: "18 credits/hr", students: 24, rating: 4.9, duration: "1.5 hours", description: "Learn Python fundamentals from scratch. Perfect for absolute beginners." },
      { id: 2, title: "Data Science with Python", price: "25 credits/hr", students: 18, rating: 4.9, duration: "2 hours", description: "Comprehensive data science course covering Pandas, NumPy, and visualization." }
    ],
    resources: [
      { title: "Python Cheat Sheet", size: "2.4 MB",price: "10 credits/hr", date: "Dec 10, 2025", downloads: 62 },
      { title: "Web Scraping Examples", size: "2.4 MB", price: "8 credits/hr", date: "Dec 17, 2025", downloads: 82 }
    ]
  };

  return (
    <div className="min-h-screen bg-[#f1fcfb] font-sans text-gray-800">
      {/* Top Navigation Bar */}
      <nav className="bg-white border-b border-gray-100 py-3 px-8 flex justify-between items-center sticky top-0 z-50">
        <Link to="/stu_dashboard" className="text-blue-500 text-sm font-medium hover:underline flex items-center gap-1">
          <span className="text-3xl">‹</span>
        </Link>
        <div className="font-bold text-gray-700 text-sm">Mentor Profile</div>

        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-sm">N</div>
          <span className="text-[10px] text-gray-400">ID: Najibur-135</span>
        </div>
      </nav>

      <div className="max-w-[1300px] mx-auto px-6 py-6">
        {/* Banner Section */}
        <div className="flex justify-between items-end mb-8">
          <div>
            <p className="text-gray-600 text-sm">Manage your profile information and settings</p>
          </div>

        </div>

        {/* Top Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
          <StatBox icon="🕒" value="42" label="Teaching hours" color="text-green-500" />
          <StatBox icon="📂" value="68" label="Classes Taught" color="text-pink-500" />
          <StatBox icon="👥" value="742" label="Total Students" color="text-purple-500" />
          <StatBox icon="⭐" value="4.9" label="Average Rating" color="text-blue-500" />
        </div>

        {/* Main Content Split */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-8">
          
          {/* LEFT COLUMN */}
          <div className="space-y-8">
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-50">
              <div className="flex items-center gap-2 mb-6 text-blue-600 font-bold">
                <span className="bg-blue-50 p-1 rounded">👤</span> Profile Overview
              </div>
              
              <div className="flex gap-6 items-start mb-6">
                <div className="w-20 h-20 bg-cyan-100 rounded-full flex items-center justify-center text-cyan-600 text-3xl font-bold shrink-0">N</div>
                <div className="flex-1">
                  <h1 className="text-2xl font-bold text-blue-900">{mentor.name}</h1>
                  <p className="text-blue-500 text-sm font-medium mb-4">{mentor.title}</p>
                  
                  {/* Internal Stats row */}
                  <div className="flex gap-8 border-b border-gray-100 pb-4 mb-4">
                    <SmallStat label="4.9" sub="Rating" />
                    <SmallStat label="347" sub="Students" />
                    <SmallStat label="2 years" sub="Mentorship" />
                    <SmallStat label="$ 8,250" sub="Earned" color="text-blue-600" />
                  </div>
                  
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">{mentor.bio}</p>
                  
                  <div className="grid grid-cols-2 gap-y-3 text-xs">
                    <div className="flex items-center gap-2 text-gray-400">🌐 <span className="text-gray-600">English, Spanish</span></div>
                    <div className="flex items-center gap-2 text-gray-400">📍 <span className="text-gray-600">{mentor.location}</span></div>
                    <div className="flex items-center gap-2 text-gray-400">✉️ <span className="text-gray-600">{mentor.email}</span></div>
                    <div className="flex items-center gap-2 text-gray-400">📞 <span className="text-gray-600">{mentor.phone}</span></div>
                  </div>
                </div>
              </div>

              {/* Student Reviews*/}
              <div className="mt-10">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-bold text-gray-800">Student Reviews</h3>
                  <div className="text-right">
                    <span className="text-3xl font-bold">4.9</span>
                    <div className="text-yellow-400 text-sm">★★★★★</div>
                    <p className="text-[10px] text-gray-400">Based on 247 reviews</p>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <ReviewItem initial="N" name="Najibur Rahman" comment="Najibur is an amazing mentor! He explained complex React patterns in a way that finally made sense." />
                  <ReviewItem initial="N" name="Najibur Rahman" comment="I took the 1.5 hour crash course and it was worth every credit. Highly recommended!" />
                </div>
                <button className="w-full text-center text-blue-400 text-xs mt-6 hover:underline">View All 247 Reviews</button>
              </div>
            </div>

            {/* About Me Section */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
               <div className="flex items-center gap-2 mb-6 text-blue-600 font-bold">
                 <span className="bg-blue-50 p-1 rounded">ℹ️</span> About Me
               </div>
               
               <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-10">
                 <div>
                    <h4 className="text-blue-800 font-bold text-sm mb-4">🔧 Skills</h4>
                    <div className="flex flex-wrap gap-2">
                      {mentor.skills.map(s => (
                        <span key={s} className="bg-blue-100 text-blue-600 px-3 py-1 rounded-md text-[10px] font-bold">{s}</span>
                      ))}
                    </div>
                    
                    <h4 className="text-blue-800 font-bold text-sm mt-8 mb-4">Education</h4>
                    <div className="space-y-4">
                      <EducationItem title="PhD in Computer Science" sub="Stanford University" date="2013-2016" />
                      <EducationItem title="MSc in Data Science" sub="MIT" date="2010-2012" />
                    </div>
                 </div>

                 <div className="bg-blue-50/30 p-6 rounded-xl border border-blue-50">
                    <h4 className="text-gray-700 font-bold text-sm mb-4">Experience</h4>
                    <div className="space-y-6">
                      <ExperienceItem 
                        title="Senior Data Scientist" 
                        company="TechSolutions Inc." 
                        date="2018 - Present" 
                        desc="Leading data science projects, building machine learning models, and mentoring junior data scientists." 
                      />
                      <ExperienceItem 
                        title="Data Analyst" 
                        company="DataCorp" 
                        date="2015 - 2018" 
                        desc="Performed data analysis, created reports and dashboards, and implemented data-driven solutions." 
                      />
                    </div>
                    
                    <div className="bg-[#f1fcfb] p-8 rounded-xl border border-teal-50 text-center max-w-[400px]">
                      <h3 className="text-gray-800 font-bold text-lg mb-4">Social Links</h3>

                      <div className="flex justify-center gap-4 mb-5">
                        <a href="#" className="w-12 h-12 bg-[#0077B5] rounded-full flex items-center justify-center text-white text-xl font-bold hover:scale-110 transition-transform shadow-sm">
                          in
                        </a>
                        <a href="#" className="w-12 h-12 bg-[#1877F2] rounded-full flex items-center justify-center text-white text-2xl font-bold hover:scale-110 transition-transform shadow-sm">
                          f
                        </a>
                        <a href="#" className="w-12 h-12 bg-[#24292e] rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform shadow-sm">
                          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                        </a>
                        <a href="#" className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white text-xl font-bold hover:scale-110 transition-transform shadow-sm">
                          X
                        </a>
                      </div>
                      <p className="text-gray-700 text-sm leading-tight max-w-[250px] mx-auto font-medium">
                        Add your social media profiles to connect with students
                      </p>
                    </div>

                 </div>
               </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-50">
               <h3 className="font-bold text-gray-800 mb-6 text-center">Choose Your Package</h3>
               <div className="space-y-4">
                 {mentor.packages.map(pkg => (
                   <div key={pkg.id} className="border border-gray-100 rounded-xl p-5 hover:border-blue-200 transition-colors">
                     <div className="flex justify-between items-start mb-2">
                       <h4 className="font-bold text-blue-900 text-sm">{pkg.title}</h4>
                       <span className="text-blue-500 font-bold text-[10px] uppercase whitespace-nowrap">{pkg.price}</span>
                     </div>
                     <p className="text-[11px] text-gray-400 mb-2">Programming</p>
                     <p className="text-[11px] text-gray-500 leading-relaxed mb-3">{pkg.description}</p>
                     <div className="flex items-center justify-between text-[10px] text-gray-500 mb-4">
                       <span className="flex items-center gap-1 text-yellow-500">★ {pkg.rating} rating</span>
                       <span className="flex items-center gap-1">👥 {pkg.students} Students</span>
                     </div>
                     <div className="text-[10px] text-blue-500 font-bold mb-4 flex items-center gap-1">🕒 {pkg.duration}</div>
                     <button
                      onClick={() => navigate(`/session-booking/${mentor.id}`)}
                      className="w-full bg-[#3498db] text-white py-2 rounded-lg text-xs font-bold hover:bg-blue-500 transition-colors">Select Package</button>
                   </div>
                 ))}
               </div>
            </div>

            {/* Resources Section */}
            <div className="space-y-4">
               {mentor.resources.map(res => (
                 <div key={res.title} className="bg-[#ebf7f6] p-6 rounded-xl text-center border border-teal-50">
                    <div className="bg-white w-10 h-10 rounded-lg flex items-center justify-center mx-auto mb-3 shadow-sm text-cyan-500 font-bold">PDF</div>
                    <h4 className="font-bold text-gray-800 text-sm mb-1">{res.title}</h4>
                    <div className="flex justify-center gap-4 text-[10px] text-gray-400 mb-4 uppercase font-medium">
                      <span>PDF</span>
                      <span>{res.size}</span>
                      <span className="text-blue-500 font-bold text-[10px] uppercase whitespace-nowrap">{res.price}</span>
                    </div>
                    <div className="flex justify-center gap-4 text-[10px] text-gray-400 mb-5">
                      <span>📅 {res.date}</span>
                      <span>📥 {res.downloads} downloads</span>
                    </div>
                    <button className="w-full bg-blue-500 text-white py-2 rounded-lg text-xs font-bold flex items-center justify-center gap-2 hover:bg-blue-600">
                      <span>↓</span> Download
                    </button>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

// Helper Components
const StatBox = ({ icon, value, label, color }) => (
  <div className="bg-white p-5 rounded-lg border border-gray-50 flex items-center gap-4 shadow-sm">
    <div className={`text-2xl p-3 bg-gray-50 rounded-lg`}>{icon}</div>
    <div>
      <div className={`text-2xl font-bold ${color}`}>{value}</div>
      <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">{label}</div>
    </div>
  </div>
);

const SmallStat = ({ label, sub, color = "text-gray-800" }) => (
  <div>
    <div className={`text-sm font-bold ${color}`}>{label}</div>
    <div className="text-[9px] text-gray-400 uppercase font-bold">{sub}</div>
  </div>
);

const ReviewItem = ({ initial, name, comment }) => (
  <div className="flex gap-4">
    <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0">{initial}</div>
    <div>
      <div className="flex items-center gap-2 mb-1">
        <span className="font-bold text-gray-800 text-sm">{name}</span>
        <div className="text-yellow-400 text-[10px]">★★★★★</div>
      </div>
      <p className="text-xs text-gray-500 leading-relaxed italic">"{comment}"</p>
    </div>
  </div>
);

const ExperienceItem = ({ title, company, date, desc }) => (
  <div className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-1 before:w-2 before:h-2 before:bg-blue-400 before:rounded-full">
    <h5 className="text-blue-900 font-bold text-xs">{title}</h5>
    <p className="text-gray-800 font-bold text-[10px] mb-1">{company}</p>
    <p className="text-gray-400 text-[9px] font-bold mb-2 uppercase">{date}</p>
    <p className="text-gray-500 text-[10px] leading-relaxed">{desc}</p>
  </div>
);

const EducationItem = ({ title, sub, date }) => (
  <div className="bg-blue-50/50 p-3 rounded-lg border border-blue-50">
    <p className="text-blue-900 font-bold text-[10px]">{title}</p>
    <p className="text-gray-500 text-[9px]">{sub}</p>
    <p className="text-gray-400 text-[9px] mt-1">{date}</p>
  </div>
);