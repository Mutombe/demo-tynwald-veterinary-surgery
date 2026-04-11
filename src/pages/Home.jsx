/**
 * Layout D — "Modern Minimal"
 * Inspired by: Flowblox, Sunify, Cleannes
 * Warm cream tones, centered text hero with image strip below,
 * bento grid features, card services with icons, FAQ-style why choose us
 */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Star,
  Phone,
  WhatsappLogo,
  Quotes,
  CheckCircle,
  ShieldCheck,
  UsersThree,
  Trophy,
  CaretDown,
} from '@phosphor-icons/react';
import PageTransition from '../components/PageTransition';
import SectionReveal from '../components/SectionReveal';
import HeroCarousel from '../components/HeroCarousel';
import siteData from '../data/siteData';
import iconMap from '../data/iconMap';

const statIcons = [Trophy, Star, ShieldCheck, UsersThree];

function Home() {
  const { business, hero, stats, servicesPreview, featuredProjects, whyChooseUs, homeTestimonials, homeCta } = siteData;
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <PageTransition>
      {/* Hero — clean centered text with subtle blended bg, image strip below */}
      <HeroCarousel
        images={hero.backgroundImages}
        backgroundImage={hero.backgroundImage}
        backgroundAlt={hero.backgroundAlt}
        overlay="subtle"
        className="pt-28 sm:pt-32 pb-20 lg:pt-0 lg:pb-0"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center lg:pt-32 lg:pb-12 overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-gold-500/20 text-gold-400 rounded-full px-4 sm:px-5 py-1.5 sm:py-2 mb-6 sm:mb-8 text-xs sm:text-sm font-medium"
          >
            <div className="w-1.5 h-1.5 bg-gold-500 rounded-full" />
            {hero.badge}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-4 sm:mb-6"
          >
            {hero.titleParts.map((part, i) =>
              part.highlight ? (
                <span key={i} className="text-gold-400">{part.text}</span>
              ) : (
                <React.Fragment key={i}>{part.text}</React.Fragment>
              )
            )}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-sm sm:text-lg text-white/70 leading-relaxed mb-8 sm:mb-10 max-w-2xl mx-auto"
          >
            {hero.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-6 sm:mb-8"
          >
            <Link to="/contact" className="btn-primary text-sm sm:text-base rounded-full px-6 sm:px-8">
              {hero.ctaPrimary}
              <ArrowRight size={20} />
            </Link>
            <Link to="/projects" className="btn-secondary text-sm sm:text-base rounded-full px-6 sm:px-8">
              {hero.ctaSecondary}
            </Link>
          </motion.div>

          {/* Trust row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm text-white/60"
          >
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} weight="fill" className={i < business.ratingRounded ? 'text-gold-500' : 'text-gold-500/30'} />
              ))}
              <span className="ml-1">{business.rating}/5</span>
            </div>
            <span className="h-4 w-px bg-white/20" />
            <span>{business.reviewCount} reviews</span>
            <span className="h-4 w-px bg-steel-200 hidden sm:inline" />
            <span className="hidden sm:inline">{hero.trustBadge}</span>
          </motion.div>
        </div>

        {/* Image strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 sm:mt-16"
        >
          <div className="grid grid-cols-3 gap-2 sm:gap-4">
            {featuredProjects.slice(0, 3).map((p, i) => (
              <div key={i} className={`rounded-xl sm:rounded-2xl overflow-hidden ${i === 1 ? 'aspect-[4/3]' : 'aspect-[3/4]'}`}>
                <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </motion.div>
      </HeroCarousel>

      {/* Feature pills / stats */}
      <section className="py-12 bg-white border-y border-earth-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {stats.map((stat, index) => {
              const IconComp = statIcons[index] || Trophy;
              return (
                <SectionReveal key={stat.label} delay={index * 0.1}>
                  <div className="inline-flex items-center gap-3 bg-earth-50 rounded-full px-6 py-3 border border-earth-100">
                    <IconComp size={20} className="text-gold-600" weight="fill" />
                    <span className="font-bold text-navy-900">{stat.number}</span>
                    <span className="text-steel-500 text-sm">{stat.label}</span>
                  </div>
                </SectionReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services — clean card grid */}
      <section className="section-padding bg-white" id="services">
        <div className="max-w-7xl mx-auto">
          <SectionReveal>
            <div className="max-w-2xl mb-16">
              <span className="text-gold-600 text-sm font-semibold uppercase tracking-wider">Services</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mt-3 mb-4">
                What we offer
              </h2>
              <p className="text-steel-500 leading-relaxed">
                Comprehensive solutions tailored to your needs, delivered with precision and care.
              </p>
            </div>
          </SectionReveal>

          {/* Bento-style grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {servicesPreview.map((service, index) => {
              const IconComp = iconMap[service.iconName] || iconMap.Buildings;
              return (
                <SectionReveal key={service.title} delay={index * 0.08}>
                  <div className="group bg-earth-50 hover:bg-navy-900 rounded-3xl p-7 transition-all duration-500 h-full border border-earth-100 hover:border-navy-800">
                    <div className="w-12 h-12 bg-white group-hover:bg-gold-500/20 rounded-2xl flex items-center justify-center mb-5 shadow-sm transition-colors">
                      <IconComp size={24} className="text-gold-600 group-hover:text-gold-400 transition-colors" />
                    </div>
                    <h3 className="text-lg font-bold text-navy-900 group-hover:text-white mb-2 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-steel-500 group-hover:text-white/60 text-sm leading-relaxed transition-colors">
                      {service.desc}
                    </p>
                  </div>
                </SectionReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects — horizontal scroll */}
      <section className="section-padding bg-earth-50">
        <div className="max-w-7xl mx-auto">
          <SectionReveal>
            <div className="flex items-end justify-between gap-6 mb-10">
              <div>
                <span className="text-gold-600 text-sm font-semibold uppercase tracking-wider">Portfolio</span>
                <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mt-3">Recent projects</h2>
              </div>
              <Link to="/projects" className="inline-flex items-center gap-2 text-navy-900 font-semibold hover:text-gold-600 transition-colors shrink-0">
                View all <ArrowRight size={18} />
              </Link>
            </div>
          </SectionReveal>
        </div>

        {/* Horizontal scrolling cards */}
        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex gap-5 px-4 sm:px-8 lg:px-16 pb-4" style={{ width: 'max-content' }}>
            {featuredProjects.map((project, index) => (
              <SectionReveal key={project.title} delay={index * 0.1}>
                <Link to="/projects" className="group block w-[300px] sm:w-[350px] shrink-0">
                  <div className="rounded-2xl overflow-hidden aspect-[4/3] mb-4">
                    <img src={project.image} alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <span className="text-gold-600 text-xs font-semibold uppercase">{project.category}</span>
                  <h3 className="text-lg font-bold text-navy-900 mt-1 group-hover:text-gold-600 transition-colors">
                    {project.title}
                  </h3>
                </Link>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us — accordion/FAQ style */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <SectionReveal direction="right">
              <div>
                <span className="text-gold-600 text-sm font-semibold uppercase tracking-wider">Why us</span>
                <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mt-3 mb-4">
                  {whyChooseUs.titleParts.map((part, i) =>
                    part.highlight ? (
                      <span key={i} className="text-gold-600">{part.text}</span>
                    ) : (
                      <React.Fragment key={i}>{part.text}</React.Fragment>
                    )
                  )}
                </h2>

                {/* Accordion items */}
                <div className="space-y-3 mt-8">
                  {whyChooseUs.points.map((item, i) => (
                    <div
                      key={item.title}
                      className={`rounded-xl border transition-all ${openFaq === i ? 'border-gold-200 bg-gold-50/50' : 'border-earth-100 bg-white'}`}
                    >
                      <button
                        onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                        className="w-full flex items-center justify-between px-5 py-4 text-left"
                      >
                        <span className="font-semibold text-navy-900">{item.title}</span>
                        <CaretDown
                          size={18}
                          className={`text-steel-400 transition-transform ${openFaq === i ? 'rotate-180' : ''}`}
                        />
                      </button>
                      {openFaq === i && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          className="px-5 pb-4"
                        >
                          <p className="text-steel-500 text-sm leading-relaxed">{item.desc}</p>
                        </motion.div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </SectionReveal>

            <SectionReveal direction="left">
              <div className="relative">
                <img
                  src={whyChooseUs.image}
                  alt={whyChooseUs.imageAlt}
                  className="rounded-3xl w-full object-cover aspect-[3/4]"
                />
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white rounded-2xl shadow-xl px-8 py-4 flex items-center gap-4">
                  <div className="text-3xl font-bold text-gold-600">{whyChooseUs.experienceYears}</div>
                  <div className="text-sm text-steel-500 font-medium">{whyChooseUs.experienceLabel}</div>
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Testimonials — clean cards */}
      <section className="section-padding bg-earth-50">
        <div className="max-w-5xl mx-auto">
          <SectionReveal>
            <div className="text-center mb-16">
              <span className="text-gold-600 text-sm font-semibold uppercase tracking-wider">Reviews</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mt-3">Loved by clients</h2>
            </div>
          </SectionReveal>

          <div className="grid md:grid-cols-3 gap-5">
            {homeTestimonials.map((item, index) => (
              <SectionReveal key={item.name} delay={index * 0.12}>
                <div className="bg-white rounded-2xl p-6 h-full flex flex-col border border-earth-100 shadow-sm">
                  <div className="flex gap-0.5 mb-4">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} size={14} weight="fill" className="text-gold-500" />
                    ))}
                  </div>
                  <p className="text-steel-600 text-sm leading-relaxed flex-1 mb-5">"{item.text}"</p>
                  <div className="flex items-center gap-3 pt-4 border-t border-earth-100">
                    <div className="w-9 h-9 bg-gold-100 text-gold-700 rounded-full flex items-center justify-center font-semibold text-sm">
                      {item.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-navy-900 font-semibold text-sm">{item.name}</p>
                      <p className="text-steel-400 text-xs">{item.role}</p>
                    </div>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — minimal, warm */}
      <section className="section-padding bg-navy-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionReveal>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              {homeCta.titleParts.map((part, i) =>
                part.highlight ? (
                  <span key={i} className="text-gold-400">{part.text}</span>
                ) : (
                  <React.Fragment key={i}>{part.text}</React.Fragment>
                )
              )}
            </h2>
            <p className="text-white/60 text-lg mb-10">{homeCta.subtitle}</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-400 text-navy-900 px-8 py-3.5 rounded-full font-semibold transition-all hover:-translate-y-0.5">
                <Phone size={20} />
                {homeCta.ctaPrimary}
              </Link>
              <a href={`https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(homeCta.whatsappText)}`}
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white px-8 py-3.5 rounded-full font-semibold transition-all hover:-translate-y-0.5">
                <WhatsappLogo size={20} weight="fill" />
                WhatsApp
              </a>
            </div>
          </SectionReveal>
        </div>
      </section>
    </PageTransition>
  );
}

export default Home;
