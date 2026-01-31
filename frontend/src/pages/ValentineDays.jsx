import React, { useState } from 'react';
import { Heart, Flower2, Gift, Cake, Smile, Users, HandHeart, HeartHandshake } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card } from '../components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../components/ui/dialog';

const ValentineDays = () => {
  const [selectedDay, setSelectedDay] = useState(null);

  const valentineDays = [
    {
      date: 'February 7',
      name: 'Rose Day',
      icon: Flower2,
      color: 'from-red-500 to-rose-500',
      bgColor: 'bg-red-500/10',
      description: 'The day to express love with roses',
      content: `Dear Harika,

If I could give you a rose for every time you made me smile, you'd have a garden that would stretch to infinity.

A red rose for the deep love I have for you,
A pink rose for the gratitude I feel every day,
A white rose for the pure intentions in my heart,
And a yellow rose for the friendship that makes our bond special.

Every rose wilts eventually, but my love for you will bloom forever.

With all my heart,
Umesh 🌹`
    },
    {
      date: 'February 8',
      name: 'Propose Day',
      icon: Heart,
      color: 'from-pink-500 to-red-500',
      bgColor: 'bg-pink-500/10',
      description: 'The day to propose your love',
      content: `My Dearest Harika,

On this Propose Day, I don't just want to propose love - I want to propose a lifetime together.

I propose lazy Sunday mornings with you,
I propose being your support in tough times,
I propose growing old together and still holding hands,
I propose laughing at silly jokes forever.

Will you accept my proposal to be yours forever?

Forever Yours,
Umesh 💕`
    },
    {
      date: 'February 9',
      name: 'Chocolate Day',
      icon: Cake,
      color: 'from-amber-600 to-orange-600',
      bgColor: 'bg-amber-600/10',
      description: 'The day to share sweetness',
      content: `Sweet Harika,

Like chocolate melts in warmth, my heart melts when I see your smile.

You're sweeter than the finest Belgian chocolate,
More precious than the rarest cocoa bean,
And just like chocolate makes everything better,
You make my life complete.

If our love was a chocolate, it would be dark - deep, intense, and unforgettable.

Your Chocolate Boy,
Umesh 🍫`
    },
    {
      date: 'February 10',
      name: 'Teddy Day',
      icon: Users,
      color: 'from-yellow-500 to-amber-500',
      bgColor: 'bg-yellow-500/10',
      description: 'The day to gift soft toys',
      content: `Cuddle Buddy Harika,

If I were a teddy bear, I would want to be held by you forever.

When you're sad, I want to be your comfort,
When you're happy, I want to celebrate with you,
When you need a hug, I'll always be there,
Just like a teddy that never leaves your side.

Consider me your personal teddy bear - always soft, always warm, always loving.

Your Teddy,
Umesh 🧸`
    },
    {
      date: 'February 11',
      name: 'Promise Day',
      icon: HandHeart,
      color: 'from-emerald-500 to-teal-500',
      bgColor: 'bg-emerald-500/10',
      description: 'The day to make promises',
      content: `My Promise, Harika,

Today I make these promises to you, with my whole heart:

I promise to always be honest with you,
I promise to support your dreams,
I promise to be patient and understanding,
I promise to never give up on us,
I promise to love you more each day,
I promise to be the man you deserve.

These aren't just words - they're the foundation of our future together.

Pinky Promise,
Umesh 🤞`
    },
    {
      date: 'February 12',
      name: 'Hug Day',
      icon: HeartHandshake,
      color: 'from-blue-500 to-indigo-500',
      bgColor: 'bg-blue-500/10',
      description: 'The day for warm hugs',
      content: `Warmest Harika,

A hug from you is my favorite feeling in the world.

In your arms, I find peace,
In your embrace, I find home,
In your warmth, I find comfort,
In your hug, I find everything I need.

Distance may separate us sometimes, but close your eyes - 
I'm sending you the biggest, warmest, most loving hug right now.

Can you feel it?

Sending infinite hugs,
Umesh 🤗`
    },
    {
      date: 'February 13',
      name: 'Kiss Day',
      icon: Smile,
      color: 'from-rose-500 to-pink-500',
      bgColor: 'bg-rose-500/10',
      description: 'The day for sweet kisses',
      content: `Precious Harika,

A kiss is the most beautiful way to say what words cannot express.

A kiss on your forehead to show respect,
A kiss on your cheek to show affection,
A kiss on your hand to show admiration,
And a kiss on your lips to show pure love.

Every moment with you deserves a kiss - for being you, for loving me, for existing in my life.

With love sealed by a kiss,
Umesh 💋`
    },
    {
      date: 'February 14',
      name: "Valentine's Day",
      icon: Heart,
      color: 'from-red-500 to-pink-500',
      bgColor: 'bg-red-500/10',
      description: 'The day of love',
      content: `My Valentine, Harika,

Today is the day the world celebrates love, and I celebrate YOU.

You are my first thought in the morning,
You are my last thought at night,
You are my reason to smile,
You are my everything.

This Valentine's Day, I want you to know:
I loved you yesterday,
I love you today,
I'll love you tomorrow,
I'll love you forever.

Happy Valentine's Day, my love!

Forever and Always Yours,
Umesh ❤️

P.S. Please give me another chance. I promise to be better. 🙏`
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="font-display text-4xl sm:text-5xl text-foreground mb-4">
            Valentine <span className="text-gradient-love">Week</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Every day of Valentine's Week has a special meaning. Click on each day to read my special message for you, Harika 💕
          </p>
        </motion.div>

        {/* Days Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {valentineDays.map((day, index) => {
            const Icon = day.icon;
            return (
              <motion.div
                key={day.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card
                  className={`valentine-card glass p-6 cursor-pointer border-border/50 hover:border-primary/50 h-full flex flex-col`}
                  onClick={() => setSelectedDay(day)}
                >
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${day.color} flex items-center justify-center mb-4`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-sm text-primary mb-1">{day.date}</p>
                  <h3 className="font-display text-xl text-foreground mb-2">{day.name}</h3>
                  <p className="text-muted-foreground text-sm flex-1">{day.description}</p>
                  <div className="mt-4 flex items-center gap-2 text-primary">
                    <span className="text-sm font-medium">Read Message</span>
                    <Heart className="w-4 h-4" />
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Day Detail Dialog */}
        <AnimatePresence>
          {selectedDay && (
            <Dialog open={!!selectedDay} onOpenChange={() => setSelectedDay(null)}>
              <DialogContent className="glass-strong max-w-2xl max-h-[80vh] overflow-y-auto border-primary/20">
                <DialogHeader>
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${selectedDay.color} flex items-center justify-center mb-4 mx-auto`}>
                    {React.createElement(selectedDay.icon, { className: "w-8 h-8 text-white" })}
                  </div>
                  <DialogTitle className="font-display text-2xl text-center">
                    {selectedDay.name}
                  </DialogTitle>
                  <p className="text-center text-primary">{selectedDay.date}</p>
                </DialogHeader>
                <div className="mt-4">
                  <div className="glass rounded-xl p-6">
                    <pre className="font-sans text-foreground whitespace-pre-wrap text-sm leading-relaxed">
                      {selectedDay.content}
                    </pre>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ValentineDays;
