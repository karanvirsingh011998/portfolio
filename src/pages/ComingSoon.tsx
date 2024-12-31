const ComingSoon = () => {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center text-center">
        <div className="bg-gray-800 p-10 rounded-lg shadow-xl max-w-md mx-auto text-white">
          <h1 className="text-5xl font-bold text-blue-400 mb-4">
            Coming Soon!
          </h1>
          <p className="text-xl text-gray-300 mb-6">
            This page is under construction. Stay tuned for something amazing!
          </p>
          <div className="flex justify-center gap-4">
            <div className="w-8 h-8 bg-blue-400 rounded-full animate-ping"></div>
            <div className="w-8 h-8 bg-blue-400 rounded-full animate-ping delay-150"></div>
            <div className="w-8 h-8 bg-blue-400 rounded-full animate-ping delay-300"></div>
          </div>
        </div>
      </div>
    );
  };
  
  export default ComingSoon;
  