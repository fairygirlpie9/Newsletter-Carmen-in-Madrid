import React from 'react';
import NewsletterForm from './components/NewsletterForm';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden flex items-center justify-center bg-madrid-cream font-sans">
      
      {/* Background Image Layer */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('/background.png')`, 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Stylish Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-madrid-cream/90 via-madrid-cream/60 to-madrid-orange/10 backdrop-blur-[2px]"></div>
      </div>

      {/* Main Content Container - Adjusted padding for mobile */}
      <main className="relative z-10 w-full max-w-2xl px-4 py-8 sm:px-6 sm:py-12">
        <div className="bg-white/90 shadow-2xl overflow-hidden backdrop-blur-md p-6 sm:p-10 md:p-16 text-center border-t-4 border-madrid-orange">
          
          {/* Header Section */}
          <div className="mb-6 md:mb-10 space-y-3 md:space-y-4">
            <span className="inline-block py-1 px-3 border border-madrid-blue/20 rounded-full text-madrid-blue font-sans text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase bg-blue-50/50">
              Travel Diary
            </span>
            
            {/* Responsive Typography */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-serif font-bold text-madrid-blue mb-2 md:mb-4 leading-none">
              Carmen<br/>
              <span className="text-3xl sm:text-4xl md:text-5xl font-light italic text-gray-500">in</span><br/>
              <span className="text-madrid-orange">Madrid</span>
            </h1>
            
            <div className="w-16 md:w-24 h-1 bg-madrid-orange mx-auto my-4 md:my-6"></div>
            
            <p className="text-gray-600 font-sans text-base sm:text-lg md:text-xl max-w-md mx-auto leading-relaxed font-light">
              An intimate journey through the hidden streets, vibrant flavors, and soulful rhythm of Spain's capital.
            </p>
          </div>

          {/* Newsletter Section */}
          <div className="mt-6 md:mt-8">
             <NewsletterForm />
          </div>

          {/* Footer */}
          <div className="mt-8 md:mt-12 text-gray-400 text-[10px] sm:text-xs font-sans tracking-wide">
            <p className="uppercase">© {new Date().getFullYear()} Carmen in Madrid</p>
          </div>
        </div>
      </main>

    </div>
  );
};

export default App;