import { useNavigate } from "react-router-dom";
import { Star, Users, BookOpen, Clock, ChevronRight,ChevronLeft, CheckCircle, Award, TrendingUp,  } from "lucide-react";
import { useState } from "react";
import Footer from "../../components/stu_layout/Footer";


export default function LandingPage() {

  const navigate = useNavigate();

  const mentors = [
    {
      name: "Md. Najibur Rahman",
      role: "Full Stack Developer",
      rating: 4.9,
      reviews: 128,
      students: 500,
      rate: "2 Credits/hr",
      expertise: ["React", "Node.js", "MongoDB"]
    },
    {
      name: "Md. Nahian",
      role: "UI/UX Designer",
      rating: 4.8,
      reviews: 96,
      students: 320,
      rate: "3 Credits/hr",
      expertise: ["Figma", "Adobe XD", "Prototyping"]
    },
    {
      name: "Md. Rafi",
      role: "English Language Coach",
      rating: 4.9,
      reviews: 210,
      students: 750,
      rate: "1.5 Credits/hr",
      expertise: ["Business English", "IELTS", "Conversation"]
    },
    {
      name: "Md. Rukon Khan",
      role: "Music Instructor",
      rating: 4.7,
      reviews: 84,
      students: 280,
      rate: "2.5 Credits/hr",
      expertise: ["Guitar", "Piano", "Music Theory"]
    }
  ];

  const categories = [
    { name: "Programming", icon: "💻", count: 124, color: "from-blue-500 to-cyan-500" },
    { name: "Design", icon: "🎨", count: 89, color: "from-purple-500 to-pink-500" },
    { name: "Language", icon: "🌐", count: 156, color: "from-green-500 to-emerald-500" },
    { name: "Music", icon: "🎵", count: 67, color: "from-orange-500 to-red-500" },
    { name: "Business", icon: "📊", count: 92, color: "from-indigo-500 to-blue-500" },
    { name: "Writing", icon: "✍️", count: 58, color: "from-amber-500 to-yellow-500" },
  ];

  const features = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Teach What You Know",
      description: "Share your expertise and earn Time Credits for every hour you teach"
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Learn What You Need",
      description: "Spend your credits to learn new skills from experienced mentors"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Grow Together",
      description: "Build meaningful connections in a community of lifelong learners"
    }
  ];

const testimonials = [
  {
    avatar: "N",
    content: "TimeBank completely changed how I learn new skills.",
    author: "Najibur Rahman",
    role: "Web Developer",
  },
  {
    avatar: "A",
    content: "Amazing platform for skill exchange without money.",
    author: "Arafat Khan",
    role: "Student",
  },
  {
    avatar: "E",
    content: "Community is super friendly and mentors are great.",
    author: "Md. Emon",
    role: "Designer",
  },
];

const [currentIndex, setCurrentIndex] = useState(0);

const nextTestimonial = () => {
  setCurrentIndex((prev) =>
    prev === testimonials.length - 1 ? 0 : prev + 1
  );
};

const prevTestimonial = () => {
  setCurrentIndex((prev) =>
    prev === 0 ? testimonials.length - 1 : prev - 1
  );
};

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">TB</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                TimeBank
              </span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="font-medium text-gray-700 hover:text-blue-600 transition-colors">How it Works</a>
              <a href="#" className="font-medium text-gray-700 hover:text-blue-600 transition-colors">Categories</a>
              <a href="#" className="font-medium text-gray-700 hover:text-blue-600 transition-colors">Mentors</a>
              <a href="#" className="font-medium text-gray-700 hover:text-blue-600 transition-colors">Success Stories</a>
              <a href="#" className="font-medium text-gray-700 hover:text-blue-600 transition-colors">Pricing</a>
            </div>
            
            <div className="flex items-center space-x-4">

              {/* ...............................Agacha delte korte hobe........................................ */}
              <button 
                onClick={() => navigate("/stu_dashboard")}
                className="px-5 py-2 text-gray-700 font-medium hover:text-blue-600 transition-colors">
                Students
              </button>

              <button 
                onClick={() => navigate("/dashboard")}
                className="px-5 py-2 text-gray-700 font-medium hover:text-blue-600 transition-colors">
                Mentors
              </button>

              <button 
                onClick={() => navigate("/admin_dashboard")}
                className="px-5 py-2 text-gray-700 font-medium hover:text-blue-600 transition-colors">
                Admin
              </button>

              <button 
                onClick={() => navigate("/login")}
                className="px-5 py-2 text-gray-700 font-medium hover:text-blue-600 transition-colors">
                Log In
              </button>

              <button 
              onClick={()=> navigate("/signup")}
              className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-medium rounded-lg hover:shadow-lg transition-all hover:scale-[1.02]">
                Get Started Free
              </button>

            </div>
          </div>
        </div>
      </nav>

      <section className="relative overflow-hidden bg-[#726EE2]">
        <div className="container relative mx-auto px-6 py-20 md:py-15">
          <div className="max-w-4xl mx-auto text-center">

            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 text-white text-sm font-medium mb-6">
              🎯 No Credit Card Required • Start Free Today
            </div>

            <h2 className="text-5xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Learn Skills Without{" "}
              <span className="bg-gradient-to-r from-cyan-300 to-blue-200 bg-clip-text text-transparent">
                Spending Money.
              </span>
            </h2>

            <p className="text-2xl text-white/90 mb-5 max-w-1xl mx-auto">
              Swap Time, Not Cash. Teach what you know, learn what you need.
            </p>

            <p className="text-white/80 mb-10 max-w-xl mx-auto">
              Join thousands who are mastering new skills through our innovative
              time-exchange platform. No subscriptions, no fees—just pure skill sharing.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-[#726EE2] font-semibold rounded-xl hover:shadow-xl transition-all hover:scale-[1.02] flex items-center justify-center space-x-2">
                <span>Start Learning Free</span>
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            <div className="mt-12 flex flex-wrap justify-center gap-8 text-white/90">
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-cyan-300" />
                <span>10,000+ Community Members</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-5 h-5 text-cyan-300" />
                <span>500+ Expert Mentors</span>
              </div>
              <div className="flex items-center space-x-2">
                <TrendingUp className="w-5 h-5 text-cyan-300" />
                <span>20,000+ Skills Exchanged</span>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Trusted by Lifelong Learners
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See what our community members have to say about their TimeBank journey
            </p>
          </div>
          
          <div className="relative max-w-4xl mx-auto flex items-center justify-center">
            {/* Left Chevron */}
            <button
              onClick={prevTestimonial}
              className="absolute left-0 md:-left-16 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-gray-100 transition"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </button>

            {/* Testimonial Card */}
            <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-2xl transition-all">
              <div className="flex items-start space-x-4">
                <div className="w-74 h-74 bg-gradient-to-r from-blue-500 to-cyan-400  flex items-center justify-center text-white font-bold text-9xl">
                  {testimonials[currentIndex].avatar}
                </div>

                <div>
                  <div className="flex items-center ">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>

                  <p className="text-gray-700 text-lg italic mb-6">
                    "{testimonials[currentIndex].content}"
                  </p>

                  <div>
                    <p className="font-bold text-gray-900">
                      {testimonials[currentIndex].author}
                    </p>
                    <p className="text-gray-600">
                      {testimonials[currentIndex].role}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Chevron */}
            <button
              onClick={nextTestimonial}
              className="absolute right-0 md:-right-16 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-gray-100 transition"
            >
              <ChevronRight className="w-6 h-6 text-gray-700" />
            </button>
          </div>

        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How Time Banking Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A simple, effective system for mutual learning and growth
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity" />
                <div className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center text-white mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Explore Categories
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Learn anything from hundreds of skill categories
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
            {categories.map((category, index) => (
              <div key={index} className="group cursor-pointer">
                <div className={`bg-gradient-to-br ${category.color} p-6 rounded-2xl text-white text-center transition-all duration-300 hover:scale-105 hover:shadow-xl`}>
                  <div className="text-3xl mb-3">{category.icon}</div>
                  <h4 className="font-bold text-lg mb-2">{category.name}</h4>
                  <p className="text-white/80 text-sm">{category.count} Mentors</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Mentors */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Top Rated Mentors
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Learn from our community's most respected experts
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {mentors.map((mentor, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <div className="p-6">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full flex items-center justify-center text-white font-bold text-xl">
                        {mentor.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <h3 className="font-bold text-lg text-gray-900">{mentor.name}</h3>
                        <p className="text-gray-600 text-sm">{mentor.role}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Star className="w-5 h-5 text-yellow-400 fill-current mr-2" />
                        <span className="font-bold">{mentor.rating}</span>
                        <span className="text-gray-500 ml-1">({mentor.reviews} reviews)</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Users className="w-4 h-4 mr-1" />
                        <span className="text-sm">{mentor.students.toLocaleString()}+</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-gray-700">
                        <Clock className="w-4 h-4 mr-2" />
                        <span className="font-medium">{mentor.rate}</span>
                      </div>
                    </div>
                    
                    <div className="pt-4 border-t border-gray-100">
                      <p className="text-sm text-gray-500 mb-2">Expert in:</p>
                      <div className="flex flex-wrap gap-2">
                        {mentor.expertise.slice(0, 2).map((skill, i) => (
                          <span key={i} className="px-3 py-1 bg-blue-50 text-blue-600 text-xs rounded-full">
                            {skill}
                          </span>
                        ))}
                        {mentor.expertise.length > 2 && (
                          <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                            +{mentor.expertise.length - 2} more
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <button className="w-full py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-lg hover:shadow-lg transition-all hover:scale-[1.02]">
                    View Profile
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button className="px-8 py-3 border-2 border-blue-500 text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-colors">
              View All Mentors
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-500">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Start Your Learning Journey?
            </h2>
            <p className="text-xl text-blue-100 mb-10">
              Join thousands who are transforming their skills through time exchange
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
              onClick={() => navigate("signup")}
              className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:shadow-2xl transition-all hover:scale-[1.02]">
                Create Free Account
              </button>
              <button className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors">
                Schedule a Demo
              </button>
            </div>
            <div className="mt-10 text-blue-100">
              <p className="flex items-center justify-center">
                <CheckCircle className="w-5 h-5 mr-2" />
                No credit card required • Free forever plan available
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}