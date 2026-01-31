import React, { useState, useEffect } from 'react';
import { Heart, Lock, Eye, EyeOff, Sparkles } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { motion, AnimatePresence } from 'framer-motion';

const LoginPage = ({ onLogin }) => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [animationPhase, setAnimationPhase] = useState('walking'); // 'walking', 'opening', 'login'
  const [isShaking, setIsShaking] = useState(false);

  const CORRECT_PASSWORD = 'Harika@gandham';
  const UMESH_IMAGE = 'https://customer-assets.emergentagent.com/job_93925170-a54d-46d9-9fdc-793833f769d3/artifacts/hj5x3zmp_umesh1.jpg';

  useEffect(() => {
    // Animation sequence: walking -> opening -> login form
    const walkTimer = setTimeout(() => {
      setAnimationPhase('opening');
    }, 2000);

    const openTimer = setTimeout(() => {
      setAnimationPhase('login');
    }, 3500);

    return () => {
      clearTimeout(walkTimer);
      clearTimeout(openTimer);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === CORRECT_PASSWORD) {
      onLogin();
    } else {
      setError('Wrong password! Hint: Think about someone special... 💕');
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 500);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      {/* Decorative Hearts Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            initial={{ 
              x: Math.random() * window.innerWidth, 
              y: window.innerHeight + 50,
              opacity: 0.3 
            }}
            animate={{ 
              y: -100,
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ 
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 5
            }}
          >
            <Heart 
              className="text-primary/30 fill-primary/20" 
              style={{ 
                width: Math.random() * 30 + 10,
                height: Math.random() * 30 + 10
              }}
            />
          </motion.div>
        ))}
      </div>

      <div className="w-full max-w-md relative z-10">
        <AnimatePresence mode="wait">
          {/* Phase 1: Umesh Walking In */}
          {animationPhase === 'walking' && (
            <motion.div
              key="walking"
              className="flex flex-col items-center justify-center h-[500px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="relative"
                initial={{ x: -300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              >
                <img
                  src={UMESH_IMAGE}
                  alt="Umesh"
                  className="w-64 h-auto rounded-2xl shadow-2xl"
                  style={{ 
                    filter: 'drop-shadow(0 0 30px rgba(255, 107, 157, 0.5))'
                  }}
                />
                <motion.div
                  className="absolute -top-4 -right-4"
                  animate={{ rotate: [0, 15, -15, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  <Heart className="w-8 h-8 text-primary fill-primary" />
                </motion.div>
              </motion.div>
              <motion.p
                className="mt-6 text-xl font-script text-primary"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
              >
                Coming to you, Harika... 💕
              </motion.p>
            </motion.div>
          )}

          {/* Phase 2: Opening Suitcase Animation */}
          {animationPhase === 'opening' && (
            <motion.div
              key="opening"
              className="flex flex-col items-center justify-center h-[500px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="relative perspective-1000">
                {/* Suitcase */}
                <div className="relative w-72 h-48">
                  {/* Suitcase Body */}
                  <div className="absolute bottom-0 w-full h-24 bg-gradient-to-b from-rose-900 to-rose-950 rounded-lg border-2 border-rose-700 shadow-xl">
                    {/* Handle */}
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-16 h-4 bg-rose-800 rounded-full border border-rose-600" />
                    {/* Lock */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <Lock className="w-6 h-6 text-yellow-500" />
                    </div>
                  </div>
                  
                  {/* Suitcase Lid */}
                  <motion.div
                    className="absolute bottom-24 w-full h-24 bg-gradient-to-t from-rose-900 to-rose-800 rounded-t-lg border-2 border-rose-700 origin-bottom"
                    initial={{ rotateX: 0 }}
                    animate={{ rotateX: -120 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    {/* Lock on lid */}
                    <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2">
                      <div className="w-4 h-4 bg-yellow-500 rounded-sm" />
                    </div>
                  </motion.div>

                  {/* Content inside (hearts and sparkles) */}
                  <motion.div
                    className="absolute bottom-6 left-1/2 transform -translate-x-1/2"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1 }}
                  >
                    <Sparkles className="w-16 h-16 text-primary animate-pulse" />
                  </motion.div>
                </div>
              </div>
              <motion.p
                className="mt-8 text-xl font-script text-primary"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                Opening my heart for you...
              </motion.p>
            </motion.div>
          )}

          {/* Phase 3: Login Form */}
          {animationPhase === 'login' && (
            <motion.div
              key="login"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              {/* Glassmorphism Login Card */}
              <motion.div
                className={`glass-strong rounded-3xl p-8 relative overflow-hidden ${isShaking ? 'animate-shake' : ''}`}
                style={{
                  animation: isShaking ? 'shake 0.5s ease-in-out' : 'none'
                }}
              >
                {/* Decorative gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 pointer-events-none" />
                
                {/* Header */}
                <div className="text-center mb-8 relative z-10">
                  <motion.div
                    className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/20 mb-4"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Heart className="w-10 h-10 text-primary fill-primary" />
                  </motion.div>
                  <h1 className="font-display text-3xl text-foreground mb-2">
                    Welcome, <span className="text-gradient-love">Harika</span>
                  </h1>
                  <p className="text-muted-foreground font-script text-xl">
                    This is for you, from Umesh with love 💕
                  </p>
                </div>

                {/* Login Form */}
                <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground flex items-center gap-2">
                      <Lock className="w-4 h-4 text-primary" />
                      Enter the Secret Key
                    </label>
                    <div className="relative">
                      <Input
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        onChange={(e) => {
                          setPassword(e.target.value);
                          setError('');
                        }}
                        placeholder="Enter password to unlock my heart..."
                        className="w-full h-12 bg-muted/50 border-border/50 focus:border-primary focus:ring-primary/30 pr-12 rounded-xl"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-primary transition-colors"
                      >
                        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    </div>
                    {error && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-sm text-red-400"
                      >
                        {error}
                      </motion.p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    className="w-full h-12 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground font-semibold rounded-xl transition-all duration-300 hover:shadow-glow"
                  >
                    <Heart className="w-5 h-5 mr-2" />
                    Unlock Our Story
                  </Button>
                </form>

                {/* Hint */}
                <div className="mt-6 text-center relative z-10">
                  <p className="text-xs text-muted-foreground">
                    💡 Hint: Your name + "@" + something close to your heart
                  </p>
                </div>
              </motion.div>

              {/* Bottom decoration */}
              <div className="text-center mt-6">
                <p className="font-script text-lg text-muted-foreground">
                  Made with 💕 by Umesh
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Custom shake animation style */}
      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
          20%, 40%, 60%, 80% { transform: translateX(5px); }
        }
        .animate-shake {
          animation: shake 0.5s ease-in-out;
        }
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </div>
  );
};

export default LoginPage;
