"use client"
import UpdateUserModal from '@/components/UpdateUserModal';
import { authClient } from '@/lib/auth-client';
import { Avatar, Card } from '@heroui/react';
import React from 'react';


const UserProfile = () => {

    const userData = authClient.useSession();
  const user = userData.data?.user;
    console.log("user", user)
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <Card className="max-w-96 mx-auto flex flex-col items-center border mt-5">
        <Avatar className="h-20 w-20">
          <Avatar.Image
            alt="John Doe"
            src={user?.image}
            referrerPolicy="no-referrer"
          />
          <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
        </Avatar>

        <h2 className="text-xl font-bold">{user?.name}</h2>
        <p className="text-muted">{user?.email}</p>

        <UpdateUserModal/>
      </Card>
      {/* <div className="w-full max-w-2xl space-y-6">
        
       
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 flex flex-col md:flex-row items-center md:items-start gap-6">
         
          <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-md">
            <img 
              src="/api/placeholder/150/150" 
              alt="Sarah Johnson"
              className="object-cover w-full h-full"
            />
          </div>

          
          <div className="flex-1 text-center md:text-left space-y-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Sarah Johnson</h1>
              <p className="text-gray-500">sarah.johnson@example.com</p>
            </div>
            
            <button className="bg-[#0f172a] hover:bg-slate-800 text-white px-6 py-2 rounded-lg font-medium transition-all shadow-lg active:scale-95">
              Update Information
            </button>
          </div>
        </div>

       
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Account Information</h2>
          
          <div className="space-y-4">
            
            <div className="flex flex-col sm:flex-row sm:items-center py-2 border-b border-gray-50">
              <span className="w-40 text-sm font-bold text-gray-900">Name</span>
              <span className="text-gray-600">Sarah Johnson</span>
            </div>

            
            <div className="flex flex-col sm:flex-row sm:items-center py-2 border-b border-gray-50">
              <span className="w-40 text-sm font-bold text-gray-900">Email</span>
              <span className="text-gray-600">sarah.johnson@example.com</span>
            </div>

            
            <div className="flex flex-col sm:flex-row sm:items-center py-2">
              <span className="w-40 text-sm font-bold text-gray-900">Member Since</span>
              <span className="text-gray-600">May 10, 2025</span>
            </div>
          </div>
        </div>

      </div> */}
    </div>
  );
};

export default UserProfile;