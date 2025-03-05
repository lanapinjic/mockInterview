
import React, { useState } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import Welcome from "./components/Welcome";
import SessionPage from "./components/Session";
import DashboardPage from "./components/Dashboard";
import InterviewSettingsPage from "./components/InterviewSettings";
import ProgressPage from "./components/Progress";




import jwt_decode from 'jwt-decode';  
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';




export default function App() {
    
    const [userInfo, setUserInfo] = useState(null); //Setting User Info

    // Single function to handle login success or failure
    const handleGoogleAuth = (response) => {
        if (response?.credential) {
            const decodedToken = jwt_decode(response.credential);
            setUserInfo(decodedToken); //Storing User Info Passed to Welcome Component
        } 
        else {
            console.log('Login Failed');
        }
    };

  return (
    
    <div className="bg-white">
       {userInfo ? ( //If User Info Exists...
            <Router>
                <Welcome userInfo={userInfo}/> 
                <Routes>
                    <Route path="/dashboard" element={<DashboardPage />} />
                    <Route path="/session" element={<SessionPage />} />
                    
                    <Route path="/progress" element={<ProgressPage />} />
                    <Route path="/interview_settings" element={<InterviewSettingsPage />} />
                    <Route path="/" element={<Navigate to="/dashboard" />} /> //default dashboard page 

                </Routes>
            </Router>
 
            ) : (
            
            <div className="relative isolate px-6 pt-14 lg:px-8">
            <div
                aria-hidden="true"
                className="absolute inset-x-0 -top-20 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            >
                <div
                    style={{
                    clipPath:
                        'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                    className="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                />
            </div>
            <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        
            <div className="text-center">
                <h1 className="text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">
                    mock interviews
                    

                </h1>
                <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
                    practice makes perfect
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                    href="/dashboard"
                    className="rounded-md bg-teal-300 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    <GoogleLogin 
                        onSuccess={handleGoogleAuth}
                        onError={handleGoogleAuth}
                    />

                </a>
              
             </div>
         </div>
        </div>
        
      </div>
     
                    
        )}
    </div>
  )
}
