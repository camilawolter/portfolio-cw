import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useI18n } from '@/i18n';
import LanguageSwitcher from '@/components/ui/LanguageSwitcher';
import ThemeToggle from '@/components/ui/ThemeToggle';

const Header: React.FC = () => {
  const { t } = useI18n();

  const fullText = 'CW';
  const [typedText, setTypedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % fullText.length;
      const fullWord = fullText;

      if (isDeleting) {
        setTypedText(fullWord.substring(0, typedText.length - 1));
        setTypingSpeed(100);
      } else {
        setTypedText(fullWord.substring(0, typedText.length + 1));
        setTypingSpeed(200);
      }

      if (!isDeleting && typedText === fullWord) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && typedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTimeout(() => {}, 500);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [typedText, isDeleting, loopNum, typingSpeed]);

  return (
    <header className="space-y-12">
      <motion.div
        className="flex flex-col gap-5"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="space-y-3">
          <motion.div
            className="w-28 h-28 rounded-full bg-transparent border-2 border-purple-500/60 dark:border-purple-400/60 ring-4 ring-purple-500/10 text-purple-900 dark:text-purple-200 flex items-center justify-center font-mono text-3xl font-extrabold tracking-wider overflow-hidden"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            aria-label="Profile terminal avatar"
          >
            <div className="flex items-center">
              <span className="drop-shadow-sm">{typedText}</span>
              <motion.span 
                className="inline-block w-2.5 h-6 bg-purple-600 dark:bg-purple-400 ml-0.5 rounded-sm"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ repeat: Infinity, duration: 0.8, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
          <div className="flex flex-col sm:items-start sm:gap-2">
            <div className="flex justify-between w-full items-center gap-3">
              <h1 className="text-5xl md:text-6xl font-extrabold tracking-tighter text-neutral-900 dark:text-white">{t.hero.name}</h1>
              <div className="flex items-center gap-1">
                <ThemeToggle />
                <LanguageSwitcher />
              </div>
            </div>
            <p className="text-xl text-neutral-500 dark:text-neutral-300 font-medium mt-2 sm:mt-0">
              {t.hero.role}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 text-[11px] text-neutral-500 dark:text-neutral-400 font-bold uppercase tracking-[0.2em]">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500" aria-hidden />
              {t.hero.nationality}
            </span>
            <span className="text-neutral-300 dark:text-neutral-700">/</span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-500" aria-hidden />
              {t.hero.location}
            </span>
            <span className="text-neutral-300 dark:text-neutral-700">/</span>
            <a href={`tel:${t.hero.phone.replace(/[^\d+]/g, '')}`} className="hover:text-purple-600 dark:hover:text-purple-300 transition-colors">
              {t.hero.phone}
            </a>
            <span className="text-neutral-300 dark:text-neutral-700">/</span>
            <a href={`mailto:${t.hero.email}`} className="hover:text-purple-600 dark:hover:text-purple-300 transition-colors">
              {t.hero.email}
            </a>
          </div>
        </div>
      </motion.div>
      
      <motion.div
        className="space-y-6 w-full"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.05 }}
      >
        <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-400 dark:text-neutral-500 border-b border-neutral-100 dark:border-neutral-800 pb-1 w-full">
          {t.sections.about}
        </h2>
        <div className="text-neutral-700 dark:text-neutral-200 leading-relaxed text-lg md:text-xl w-full space-y-4">
          {t.hero.about.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="flex flex-wrap gap-4"
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
      >
        <motion.a 
          href="https://linkedin.com/in/camilawolter/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-5 py-2.5 border border-neutral-200 dark:border-neutral-800 rounded-lg text-sm font-bold text-neutral-600 dark:text-neutral-200 hover:border-purple-500 dark:hover:border-purple-400 hover:text-purple-600 dark:hover:text-purple-200 hover:bg-purple-50/30 dark:hover:bg-purple-950/20 transition-all shadow-sm group"
          whileHover={{ y: -2, scale: 1.01 }}
          transition={{ type: 'spring', stiffness: 260, damping: 18 }}
        >
          <svg className="w-4 h-4 fill-current group-hover:text-purple-600 dark:group-hover:text-purple-200" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
          LinkedIn
        </motion.a>
        <motion.a 
          href="https://github.com/camilawolter" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-5 py-2.5 border border-neutral-200 dark:border-neutral-800 rounded-lg text-sm font-bold text-neutral-600 dark:text-neutral-200 hover:border-purple-500 dark:hover:border-purple-400 hover:text-purple-600 dark:hover:text-purple-200 hover:bg-purple-50/30 dark:hover:bg-purple-950/20 transition-all shadow-sm group"
          whileHover={{ y: -2, scale: 1.01 }}
          transition={{ type: 'spring', stiffness: 260, damping: 18 }}
        >
          <svg className="w-4 h-4 fill-current group-hover:text-purple-600 dark:group-hover:text-purple-200" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
          GitHub
        </motion.a>
      </motion.div>
    </header>
  );
};

export default Header;
