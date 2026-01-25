'use client'

import AnimatedDiagram, { type DiagramStep } from '../diagrams/AnimatedDiagram'

export default function ColorModelsDiagram() {
  const steps: DiagramStep[] = [
    {
      id: 'rgb',
      label: 'RGB Model',
      render: (isActive) => (
        <svg width="100%" height="100%" viewBox="0 0 900 500" className="overflow-visible">
          <circle cx="300" cy="200" r="60" fill={isActive ? '#FF0000' : '#E5E5E5'} className="transition-all duration-500" />
          <text x="300" y="207" textAnchor="middle" fontSize="14" fill={isActive ? '#FFFFFF' : '#4A4A4A'} fontWeight="600" className="font-ui">R</text>
          <circle cx="450" cy="200" r="60" fill={isActive ? '#00FF00' : '#E5E5E5'} className="transition-all duration-500" />
          <text x="450" y="207" textAnchor="middle" fontSize="14" fill={isActive ? '#000000' : '#4A4A4A'} fontWeight="600" className="font-ui">G</text>
          <circle cx="600" cy="200" r="60" fill={isActive ? '#0000FF' : '#E5E5E5'} className="transition-all duration-500" />
          <text x="600" y="207" textAnchor="middle" fontSize="14" fill={isActive ? '#FFFFFF' : '#4A4A4A'} fontWeight="600" className="font-ui">B</text>
          <text x="450" y="300" textAnchor="middle" fontSize="14" fill={isActive ? '#1A1A1A' : '#4A4A4A'} fontWeight="600" className="font-ui">Additive Color</text>
        </svg>
      ),
    },
    {
      id: 'cmyk',
      label: 'CMYK Model',
      render: (isActive, isPast) => (
        <svg width="100%" height="100%" viewBox="0 0 900 500" className="overflow-visible">
          <g opacity={isPast ? 0.3 : 1}>
            <circle cx="300" cy="200" r="60" fill="#E5E5E5" />
            <circle cx="450" cy="200" r="60" fill="#E5E5E5" />
            <circle cx="600" cy="200" r="60" fill="#E5E5E5" />
          </g>
          <circle cx="300" cy="200" r="60" fill={isActive ? '#00FFFF' : '#E5E5E5'} className="transition-all duration-500" />
          <text x="300" y="207" textAnchor="middle" fontSize="14" fill={isActive ? '#000000' : '#4A4A4A'} fontWeight="600" className="font-ui">C</text>
          <circle cx="450" cy="200" r="60" fill={isActive ? '#FF00FF' : '#E5E5E5'} className="transition-all duration-500" />
          <text x="450" y="207" textAnchor="middle" fontSize="14" fill={isActive ? '#000000' : '#4A4A4A'} fontWeight="600" className="font-ui">M</text>
          <circle cx="600" cy="200" r="60" fill={isActive ? '#FFFF00' : '#E5E5E5'} className="transition-all duration-500" />
          <text x="600" y="207" textAnchor="middle" fontSize="14" fill={isActive ? '#000000' : '#4A4A4A'} fontWeight="600" className="font-ui">Y</text>
          <text x="450" y="300" textAnchor="middle" fontSize="14" fill={isActive ? '#1A1A1A' : '#4A4A4A'} fontWeight="600" className="font-ui">Subtractive Color</text>
        </svg>
      ),
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
