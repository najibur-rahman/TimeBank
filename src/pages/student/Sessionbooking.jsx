import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Footer } from "./footer";

export const Sessionbooking = () => {
  const navigate = useNavigate();

  const handleAvatarClick = () => {
    navigate("/profile");
  };

  const mentorsData = {
    1: {
      id: 1,
      name: "Md. Najibur Rahman",
      title: "Senior React Developer at TechCorp",
      experience: "8+ years teaching experience",
      services: [
        { id: 1, name: "Advanced React Patterns", duration: "1 Hour Consultation", price: "$ 1,000" },
        { id: 2, name: "React Performance Optimization", duration: "1.5 Hours Workshop", price: "$ 1,500" },
        { id: 3, name: "Code Review & Best Practices", duration: "2 Hours Session", price: "$ 2,000" },
      ],
    },
  };

  const { mentorId } = useParams();
  const mentor = mentorsData[parseInt(mentorId)] || mentorsData[1];

  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedService, setSelectedService] = useState(mentor.services[0]);
  const [currentMonth, setCurrentMonth] = useState(1); 
  const [currentYear, setCurrentYear] = useState(2026);


  const generateCalendarDays = () => {
    const days = [];
    const firstDay = new Date(currentYear, currentMonth, 1).getDay();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const prevMonthDays = new Date(currentYear, currentMonth, 0).getDate();

    for (let i = firstDay - 1; i >= 0; i--) {
      days.push({ day: prevMonthDays - i, isCurrentMonth: false, date: new Date(currentYear, currentMonth - 1, prevMonthDays - i) });
    }
    for (let i = 1; i <= daysInMonth; i++) {
      days.push({ day: i, isCurrentMonth: true, date: new Date(currentYear, currentMonth, i) });
    }
    const totalCells = 42;
    const nextMonthDays = totalCells - days.length;
    for (let i = 1; i <= nextMonthDays; i++) {
      days.push({ day: i, isCurrentMonth: false, date: new Date(currentYear, currentMonth + 1, i) });
    }
    return days;
  };

  const calendarDays = generateCalendarDays();
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const timeSlots = ["09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM"];

  const helpItems = [
    { title: "Timezone Conversion", description: "All times are automatically converted to your local timezone." },
    { title: "Session Duration", description: `This session is ${selectedService.duration}.` },
    { title: "Secure Payment", description: "Your payment is held securely until the session is completed." },
  ];

  const formatDate = (date) => {
    if (!date) return "Not Selected";
    return date.toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" });
  };

  return (
    <div className="min-h-screen bg-[#f8f9fa] font-sans text-[#333]">
      {/* Navbar */}
      <nav className="bg-white shadow-sm border-b border-[#e0e0e0] sticky top-0 z-50">
        <div className="max-w-[1200px] mx-auto px-5 h-[70px] flex justify-between items-center">
          <div className="text-xl font-bold text-[#2c3e50]">Session Booking</div>
          <div className="flex items-center gap-5">
            <Link to="/" className="flex items-center gap-2 px-5 py-2.5 border border-[#e0e0e0] rounded-lg text-[#3498db] font-medium hover:bg-[#f0f7ff] transition-all">
              <span>←</span> Back to Dashboard
            </Link>
            <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold cursor-pointer" onClick={handleAvatarClick}>E</div>
          </div>
        </div>
      </nav>

      <div className="max-w-[1200px] mx-auto p-5 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Left Column */}
          <div className="flex-1 min-w-[300px]">
            
            {/* Mentor Info Card */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 mb-8">
              <h2 className="text-2xl font-bold text-[#2c3e50] mb-1">{mentor.name}</h2>
              <p className="text-[#7f8c8d] mb-4">{mentor.title} · {mentor.experience}</p>
              <div className="text-sm text-[#3498db] p-3 bg-[#f0f7ff] rounded-lg border-l-4 border-[#3498db]">
                All times shown in your local timezone: Asia/Dhaka
              </div>
            </div>

            {/* Calendar Section */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 mb-8">
              <h3 className="text-xl font-bold text-[#2c3e50] mb-5">Select Date & Time</h3>
              
              <div className="flex justify-between items-center mb-5">
                <button className="text-xl text-[#3498db] hover:bg-[#f0f7ff] px-4 py-1 rounded" onClick={() => setCurrentMonth(m => m - 1)}>←</button>
                <div className="text-lg font-bold text-[#2c3e50]">{monthNames[currentMonth]} {currentYear}</div>
                <button className="text-xl text-[#3498db] hover:bg-[#f0f7ff] px-4 py-1 rounded" onClick={() => setCurrentMonth(m => m + 1)}>→</button>
              </div>

              <div className="grid grid-cols-7 gap-2 mb-5">
                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(day => (
                  <div key={day} className="text-center font-bold text-[#7f8c8d] text-sm py-2">{day}</div>
                ))}
                {calendarDays.map((dayInfo, index) => (
                  <div
                    key={index}
                    onClick={() => dayInfo.isCurrentMonth && setSelectedDate(dayInfo.date)}
                    className={`text-center py-3 rounded-lg cursor-pointer transition-all text-sm ${
                      !dayInfo.isCurrentMonth ? "text-gray-300" : 
                      selectedDate?.getDate() === dayInfo.day && selectedDate?.getMonth() === currentMonth ? "bg-[#3498db] text-white" : "text-[#2c3e50] hover:bg-[#f0f7ff] hover:text-[#3498db]"
                    }`}
                  >
                    {dayInfo.day}
                  </div>
                ))}
              </div>

              <h4 className="text-lg font-bold text-[#2c3e50] mt-8 mb-4">Available Time Slots</h4>
              <div className="flex flex-wrap gap-3">
                {timeSlots.map((time) => (
                  <button
                    key={time}
                    onClick={() => setSelectedTime(time)}
                    className={`px-5 py-2.5 border rounded-lg text-sm transition-all ${selectedTime === time ? "bg-[#3498db] text-white border-[#3498db]" : "bg-white border-[#e0e0e0] hover:border-[#3498db] hover:text-[#3498db]"}`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>

            {/* Booking Summary */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-[#2c3e50] mb-5">Booking Summary</h3>
              <div className="space-y-4">
                <div className="flex justify-between pb-4 border-b border-gray-50">
                  <span className="text-sm text-[#7f8c8d]">Mentor:</span>
                  <span className="text-sm font-semibold text-[#2c3e50]">{mentor.name}</span>
                </div>
                <div className="flex justify-between pb-4 border-b border-gray-50">
                  <span className="text-sm text-[#7f8c8d]">Service:</span>
                  <span className="text-sm font-semibold text-[#2c3e50]">{selectedService.name}</span>
                </div>
                <div className="flex justify-between pb-4 border-b border-gray-50">
                  <span className="text-sm text-[#7f8c8d]">Date & Time:</span>
                  <span className="text-sm font-semibold text-[#2c3e50]">{selectedDate ? formatDate(selectedDate) : "Not Selected"} {selectedTime && `at ${selectedTime}`}</span>
                </div>
                <div className="flex justify-between pt-4 border-t-2 border-[#e0e0e0] text-lg font-bold text-[#2c3e50]">
                  <span>Total Cost:</span>
                  <span>{selectedService.price}</span>
                </div>
              </div>

              <div className="flex gap-4 mt-8">
                <Link to="/" className="flex-1 text-center py-4 border-2 border-[#e74c3c] text-[#e74c3c] rounded-lg font-bold hover:bg-[#e74c3c] hover:text-white transition-all">Cancel</Link>
                <button className="flex-1 py-4 bg-[#3498db] text-white rounded-lg font-bold hover:bg-[#2980b9] transition-all shadow-md">Book Now</button>
              </div>
            </div>
          </div>

          {/* Right Column (Sidebar) */}
          <div className="w-full lg:w-[350px] space-y-6">
            <section className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-[#2c3e50] mb-5">Need Help?</h3>
              <div className="space-y-6">
                {helpItems.map((item, idx) => (
                  <div key={idx} className="pb-5 border-b border-gray-50 last:border-0 last:pb-0">
                    <h4 className="text-sm font-bold text-[#2c3e50] mb-2">{item.title}</h4>
                    <p className="text-xs text-[#7f8c8d] leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-[#3498db] rounded-xl p-6 text-center text-white shadow-md">
              <h3 className="text-xl font-bold mb-2">Secure Escrow Payment</h3>
              <p className="text-sm opacity-90 leading-relaxed">Your payment is held securely in escrow until the session is 
                  completed. The mentor only receives payment after you confirm
                  the session was satisfactory.</p>
            </section>

          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};