'use client'

import AnimatedDiagram, { type DiagramStep } from '../diagrams/AnimatedDiagram'

export default function ColorModelsDiagram() {
  const steps: DiagramStep[] = [
    {
      id: 'rgb',
      label: 'RGB Model',
      render: (isActive) => (
        <svg width="100%" height="100%" viewBox="0 0 900 500" className="overflow-visible">
          <circle cx="300" cy="200" r="60" fill={isActive ? '#FF0000' : '#FAFAF9'} stroke={isActive ? '#FF0000' : '#1A1A1A'} strokeWidth="2" className="transition-all duration-500" />
          <text x="300" y="207" textAnchor="middle" fontSize="14" fill={isActive ? '#FFFFFF' : '#1A1A1A'} fontWeight="600" className="font-ui">R</text>
          <circle cx="450" cy="200" r="60" fill={isActive ? '#00FF00' : '#FAFAF9'} stroke={isActive ? '#00FF00' : '#1A1A1A'} strokeWidth="2" className="transition-all duration-500" />
          <text x="450" y="207" textAnchor="middle" fontSize="14" fill={isActive ? '#000000' : '#1A1A1A'} fontWeight="600" className="font-ui">G</text>
          <circle cx="600" cy="200" r="60" fill={isActive ? '#0000FF' : '#FAFAF9'} stroke={isActive ? '#0000FF' : '#1A1A1A'} strokeWidth="2" className="transition-all duration-500" />
          <text x="600" y="207" textAnchor="middle" fontSize="14" fill={isActive ? '#FFFFFF' : '#1A1A1A'} fontWeight="600" className="font-ui">B</text>
          <text x="450" y="300" textAnchor="middle" fontSize="14" fill="#1A1A1A" fontWeight="600" className="font-ui">Additive Color</text>
        </svg>
      ),
    },
    {
      id: 'cmyk',
      label: 'CMYK Model',
      render: (isActive, isPast) => {
        // Text colors: dark when background is light (past/inactive), appropriate contrast when active
        const pastTextColor = '#1A1A1A' // Always dark for past steps
        const cTextColor = isActive ? '#000000' : pastTextColor // Cyan needs black text
        const mTextColor = isActive ? '#000000' : pastTextColor // Magenta needs black text  
        const yTextColor = isActive ? '#000000' : pastTextColor // Yellow needs black text
        
        return (
        <svg width="100%" height="100%" viewBox="0 0 900 500" className="overflow-visible">
          <g opacity={isPast ? 0.6 : 1}>
            <circle cx="300" cy="200" r="60" fill="#FAFAF9" stroke="#1A1A1A" strokeWidth="2" />
            <circle cx="450" cy="200" r="60" fill="#FAFAF9" stroke="#1A1A1A" strokeWidth="2" />
            <circle cx="600" cy="200" r="60" fill="#FAFAF9" stroke="#1A1A1A" strokeWidth="2" />
            <text x="300" y="207" textAnchor="middle" fontSize="14" fill={pastTextColor} fontWeight="600" className="font-ui">R</text>
            <text x="450" y="207" textAnchor="middle" fontSize="14" fill={pastTextColor} fontWeight="600" className="font-ui">G</text>
            <text x="600" y="207" textAnchor="middle" fontSize="14" fill={pastTextColor} fontWeight="600" className="font-ui">B</text>
          </g>
          <circle cx="300" cy="200" r="60" fill={isActive ? '#00FFFF' : '#FAFAF9'} stroke={isActive ? '#00FFFF' : '#1A1A1A'} strokeWidth="2" className="transition-all duration-500" />
          <text x="300" y="207" textAnchor="middle" fontSize="14" fill={cTextColor} fontWeight="600" className="font-ui">C</text>
          <circle cx="450" cy="200" r="60" fill={isActive ? '#FF00FF' : '#FAFAF9'} stroke={isActive ? '#FF00FF' : '#1A1A1A'} strokeWidth="2" className="transition-all duration-500" />
          <text x="450" y="207" textAnchor="middle" fontSize="14" fill={mTextColor} fontWeight="600" className="font-ui">M</text>
          <circle cx="600" cy="200" r="60" fill={isActive ? '#FFFF00' : '#FAFAF9'} stroke={isActive ? '#FFFF00' : '#1A1A1A'} strokeWidth="2" className="transition-all duration-500" />
          <text x="600" y="207" textAnchor="middle" fontSize="14" fill={yTextColor} fontWeight="600" className="font-ui">Y</text>
          <text x="450" y="300" textAnchor="middle" fontSize="14" fill="#1A1A1A" fontWeight="600" className="font-ui">Subtractive Color</text>
        </svg>
        )
      },
    },
  ]

  return (
    <AnimatedDiagram
      steps={steps}
      autoPlay={true}
      stepDuration={2000}
      size="primary"
      diagramId="color-models"
    />
  )
}
