'use client'

import React from 'react'
import { ArrowRight, BookOpen, BadgeIcon as Certificate, Users, Globe } from 'lucide-react'

// changes
import { useWeb3Modal } from '@web3modal/wagmi/react';
import { useAccount, useDisconnect } from 'wagmi';
// changes end

interface FeatureCardProps {
  title: string
  description: string
  icon: React.ReactNode
}

interface StatItemProps {
  value: string
  label: string
  icon: React.ReactNode
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon }) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
    <div className="text-green-500 mb-4">{icon}</div>
    <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
)

const StatItem: React.FC<StatItemProps> = ({ value, label, icon }) => (
  <div className="text-center">
    <div className="flex items-center justify-center mb-2">
      <div className="text-green-500 mr-2">{icon}</div>
      <div className="text-3xl font-bold text-gray-800">{value}</div>
    </div>
    <p className="text-gray-600">{label}</p>
  </div>
)

const LandingPage: React.FC = () => {

  // changes
  const { open } = useWeb3Modal()
  const { address, isConnected } = useAccount()
  const { disconnect } = useDisconnect()

  const handleWalletConnection = () => {
    if (isConnected) {
      disconnect()
    } else {
      open()
    }
  }
  // changes end

  const features: FeatureCardProps[] = [
    {
      title: "Learn & Earn",
      description: "Earn tokens for completing lessons and achieving milestones in your language journey.",
      icon: <BookOpen size={24} />
    },
    {
      title: "NFT Certificates",
      description: "Receive verifiable certificates as NFTs to showcase your language proficiency.",
      icon: <Certificate size={24} />
    },
    {
      title: "Community Learning",
      description: "Connect with language learners worldwide and practice together.",
      icon: <Users size={24} />
    }
  ]

  const stats: StatItemProps[] = [
    { value: "0K+", label: "Active Learners", icon: <Users size={20} /> },
    { value: "2+", label: "Languages", icon: <Globe size={20} /> },
    { value: "0K+", label: "NFT Certificates Issued", icon: <Certificate size={20} /> }
  ]

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
    {/* Navbar */}
    <nav className="flex justify-between items-center px-4 sm:px-6 py-4 bg-white shadow-sm sticky top-0 z-10">
      <div className="text-2xl font-bold text-green-500">
        LinguaQuest
      </div>
      <button 
        className="bg-green-500 text-white px-4 py-2 rounded-full font-semibold hover:bg-green-600 transition-colors duration-300"
        onClick={handleWalletConnection}
      >
        {isConnected 
          ? `${address?.slice(0, 6)}...${address?.slice(-4)}` 
          : 'Connect Wallet'}
      </button>
    </nav>

      {/* Hero Section */}
      <main className="text-center px-4 sm:px-6 py-12 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900">
          Learn Languages in the Web3 Era
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Master new languages while earning tokens and NFT certificates.
        </p>

        {/* CTA Button */}
        <div className="mb-16">
          <button 
            className="bg-green-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-600 transition-colors duration-300 flex items-center justify-center mx-auto"
            onClick={() => console.log("Start learning clicked")}
          >
            Start Learning 
            <ArrowRight className="ml-2" size={20} />
          </button>
        </div>

        {/* Feature Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Our Impact</h2>
          <div className="grid grid-cols-3 gap-4">
            {stats.map((stat, index) => (
              <StatItem 
                key={index}
                value={stat.value}
                label={stat.label}
                icon={stat.icon}
              />
            ))}
          </div>
        </div>

        {/* Testimonial Section */}
        <div className="mt-16 bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            What Our Learners Say
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="text-left">
              <p className="text-gray-600 mb-2">"LinguaQuest has revolutionized my language learning journey. The ability to earn while learning keeps me motivated!"</p>
              <p className="font-semibold text-gray-800">- Sarah K., Spanish Learner</p>
            </div>
            <div className="text-left">
              <p className="text-gray-600 mb-2">"The NFT certificates are a game-changer. They're not just proof of my skills, but also a cool digital asset!"</p>
              <p className="font-semibold text-gray-800">- Alex M., English Learner</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-16 text-center text-gray-600">
          <p>&copy; 2024 LinguaQuest. All rights reserved.</p>
        </footer>
      </main>
    </div>
  )
}

export default LandingPage
