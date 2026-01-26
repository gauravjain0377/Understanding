'use client'

import AnimatedDiagram, { type DiagramStep } from '../diagrams/AnimatedDiagram'
import PrimaryVisual from '@/components/diagrams/PrimaryVisual'

export default function ScreenFlowDiagram() {
  const steps: DiagramStep[] = [
    {
      id: 'data',
      label: 'Digital Data',
      render: (isActive, isPast, isFuture) => (
        <svg width="100%" height="100%" viewBox="0 0 800 400" className="overflow-visible">
          <g opacity={isActive ? 1 : isPast ? 0.6 : 0.3}>
            <rect x="50" y="150" width="120" height="80" rx="4" fill={isActive ? '#5B8FA3' : '#FAFAF9'} stroke={isActive ? '#5B8FA3' : '#E5E5E5'} strokeWidth={isActive ? 2 : 1} className="transition-all duration-500" />
            <text x="110" y="195" textAnchor="middle" fontSize="14" fill={isActive ? '#1A1A1A' : '#4A4A4A'} fontWeight={isActive ? '600' : '400'} className="font-ui">Digital Data</text>
            <text x="110" y="220" textAnchor="middle" fontSize="11" fill="#4A4A4A" className="font-ui">Array of numbers</text>
          </g>
        </svg>
      ),
    },
    {
      id: 'graphics',
      label: 'Graphics System',
      render: (isActive, isPast, isFuture) => (
        <svg width="100%" height="100%" viewBox="0 0 800 400" className="overflow-visible">
          <g opacity={isPast ? 0.6 : 1}>
            <rect x="50" y="150" width="120" height="80" rx="4" fill="#FAFAF9" stroke="#E5E5E5" strokeWidth="1" />
            <text x="110" y="195" textAnchor="middle" fontSize="14" fill="#4A4A4A" className="font-ui">Digital Data</text>
          </g>
          <line x1="170" y1="190" x2="230" y2="190" stroke={isActive ? '#5B8FA3' : '#E5E5E5'} strokeWidth="2" markerEnd="url(#arrow)" className="transition-colors duration-500" />
          <g opacity={isActive ? 1 : 0.3}>
            <rect x="250" y="150" width="120" height="80" rx="4" fill={isActive ? '#5B8FA3' : '#FAFAF9'} stroke={isActive ? '#5B8FA3' : '#E5E5E5'} strokeWidth={isActive ? 2 : 1} className="transition-all duration-500" />
            <text x="310" y="195" textAnchor="middle" fontSize="14" fill={isActive ? '#1A1A1A' : '#4A4A4A'} fontWeight={isActive ? '600' : '400'} className="font-ui">Graphics System</text>
            <text x="310" y="220" textAnchor="middle" fontSize="11" fill="#4A4A4A" className="font-ui">Convert to signals</text>
          </g>
          <defs>
            <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
              <polygon points="0 0, 10 3, 0 6" fill={isActive ? '#5B8FA3' : '#E5E5E5'} />
            </marker>
          </defs>
        </svg>
      ),
    },
    {
      id: 'controller',
      label: 'Display Controller',
      render: (isActive, isPast, isFuture) => (
        <svg width="100%" height="100%" viewBox="0 0 800 400" className="overflow-visible">
          <g opacity={0.6}>
            <rect x="50" y="150" width="120" height="80" rx="4" fill="#FAFAF9" stroke="#E5E5E5" strokeWidth="1" />
            <rect x="250" y="150" width="120" height="80" rx="4" fill="#FAFAF9" stroke="#E5E5E5" strokeWidth="1" />
          </g>
          <line x1="170" y1="190" x2="230" y2="190" stroke="#5B8FA3" strokeWidth="2" markerEnd="url(#arrow1)" />
          <line x1="370" y1="190" x2="430" y2="190" stroke={isActive ? '#5B8FA3' : '#E5E5E5'} strokeWidth="2" markerEnd="url(#arrow2)" className="transition-colors duration-500" />
          <g opacity={isActive ? 1 : 0.3}>
            <rect x="450" y="150" width="120" height="80" rx="4" fill={isActive ? '#5B8FA3' : '#FAFAF9'} stroke={isActive ? '#5B8FA3' : '#E5E5E5'} strokeWidth={isActive ? 2 : 1} className="transition-all duration-500" />
            <text x="510" y="195" textAnchor="middle" fontSize="14" fill={isActive ? '#1A1A1A' : '#4A4A4A'} fontWeight={isActive ? '600' : '400'} className="font-ui">Controller</text>
            <text x="510" y="220" textAnchor="middle" fontSize="11" fill="#4A4A4A" className="font-ui">Route to pixels</text>
          </g>
          <defs>
            <marker id="arrow1" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
              <polygon points="0 0, 10 3, 0 6" fill="#5B8FA3" />
            </marker>
            <marker id="arrow2" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
              <polygon points="0 0, 10 3, 0 6" fill={isActive ? '#5B8FA3' : '#E5E5E5'} />
            </marker>
          </defs>
        </svg>
      ),
    },
    {
      id: 'pixels',
      label: 'Pixel Grid',
      render: (isActive, isPast, isFuture) => (
        <svg width="100%" height="100%" viewBox="0 0 800 400" className="overflow-visible">
          <g opacity={0.6}>
            <rect x="50" y="150" width="120" height="80" rx="4" fill="#FAFAF9" stroke="#E5E5E5" strokeWidth="1" />
            <rect x="250" y="150" width="120" height="80" rx="4" fill="#FAFAF9" stroke="#E5E5E5" strokeWidth="1" />
            <rect x="450" y="150" width="120" height="80" rx="4" fill="#FAFAF9" stroke="#E5E5E5" strokeWidth="1" />
          </g>
          <line x1="170" y1="190" x2="230" y2="190" stroke="#5B8FA3" strokeWidth="2" markerEnd="url(#arrow1)" />
          <line x1="370" y1="190" x2="430" y2="190" stroke="#5B8FA3" strokeWidth="2" markerEnd="url(#arrow2)" />
          <line x1="570" y1="190" x2="630" y2="190" stroke={isActive ? '#5B8FA3' : '#E5E5E5'} strokeWidth="2" markerEnd="url(#arrow3)" className="transition-colors duration-500" />
          
          {/* Pixel grid */}
          <g opacity={isActive ? 1 : 0.3}>
            <rect x="650" y="100" width="100" height="100" rx="4" fill={isActive ? '#5B8FA3' : '#FAFAF9'} stroke={isActive ? '#5B8FA3' : '#E5E5E5'} strokeWidth={isActive ? 2 : 1} className="transition-all duration-500" />
            {/* Small grid inside */}
            {[0, 1, 2, 3, 4].map(i => 
              [0, 1, 2, 3, 4].map(j => (
                <rect
                  key={`${i}-${j}`}
                  x={660 + i * 16}
                  y={110 + j * 16}
                  width="12"
                  height="12"
                  fill={isActive ? (i + j) % 2 === 0 ? '#8FA3B0' : '#5B8FA3' : '#E5E5E5'}
                  className="transition-all duration-500"
                />
              ))
            )}
            <text x="700" y="220" textAnchor="middle" fontSize="14" fill={isActive ? '#1A1A1A' : '#4A4A4A'} fontWeight={isActive ? '600' : '400'} className="font-ui">Pixel Grid</text>
            <text x="700" y="240" textAnchor="middle" fontSize="11" fill="#4A4A4A" className="font-ui">Millions of lights</text>
          </g>
          <defs>
            <marker id="arrow1" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
              <polygon points="0 0, 10 3, 0 6" fill="#5B8FA3" />
            </marker>
            <marker id="arrow2" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
              <polygon points="0 0, 10 3, 0 6" fill="#5B8FA3" />
            </marker>
            <marker id="arrow3" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
              <polygon points="0 0, 10 3, 0 6" fill={isActive ? '#5B8FA3' : '#E5E5E5'} />
            </marker>
          </defs>
        </svg>
      ),
    },
    {
      id: 'light',
      label: 'Visible Light',
      render: (isActive, isPast, isFuture) => (
        <svg width="100%" height="100%" viewBox="0 0 800 400" className="overflow-visible">
          <g opacity={0.6}>
            <rect x="50" y="150" width="120" height="80" rx="4" fill="#FAFAF9" stroke="#E5E5E5" strokeWidth="1" />
            <rect x="250" y="150" width="120" height="80" rx="4" fill="#FAFAF9" stroke="#E5E5E5" strokeWidth="1" />
            <rect x="450" y="150" width="120" height="80" rx="4" fill="#FAFAF9" stroke="#E5E5E5" strokeWidth="1" />
            <rect x="650" y="100" width="100" height="100" rx="4" fill="#FAFAF9" stroke="#E5E5E5" strokeWidth="1" />
          </g>
          <line x1="170" y1="190" x2="230" y2="190" stroke="#5B8FA3" strokeWidth="2" markerEnd="url(#arrow1)" />
          <line x1="370" y1="190" x2="430" y2="190" stroke="#5B8FA3" strokeWidth="2" markerEnd="url(#arrow2)" />
          <line x1="570" y1="190" x2="630" y2="190" stroke="#5B8FA3" strokeWidth="2" markerEnd="url(#arrow3)" />
          
          {/* Glowing effect for light */}
          <g opacity={isActive ? 1 : 0.3}>
            <rect x="650" y="100" width="100" height="100" rx="4" fill={isActive ? '#5B8FA3' : '#FAFAF9'} stroke={isActive ? '#5B8FA3' : '#E5E5E5'} strokeWidth={isActive ? 2 : 1} className="transition-all duration-500" />
            {/* Brighter grid */}
            {[0, 1, 2, 3, 4].map(i => 
              [0, 1, 2, 3, 4].map(j => (
                <rect
                  key={`${i}-${j}`}
                  x={660 + i * 16}
                  y={110 + j * 16}
                  width="12"
                  height="12"
                  fill={isActive ? '#B0C0D0' : '#E5E5E5'}
                  className="transition-all duration-500"
                />
              ))
            )}
            {/* Light rays */}
            {isActive && (
              <>
                <line x1="700" y1="200" x2="750" y2="150" stroke="#5B8FA3" strokeWidth="1" opacity="0.5" />
                <line x1="700" y1="200" x2="750" y2="200" stroke="#5B8FA3" strokeWidth="1" opacity="0.5" />
                <line x1="700" y1="200" x2="750" y2="250" stroke="#5B8FA3" strokeWidth="1" opacity="0.5" />
              </>
            )}
            <text x="700" y="220" textAnchor="middle" fontSize="14" fill={isActive ? '#1A1A1A' : '#4A4A4A'} fontWeight={isActive ? '600' : '400'} className="font-ui">Visible Light</text>
            <text x="700" y="240" textAnchor="middle" fontSize="11" fill="#4A4A4A" className="font-ui">Image appears</text>
          </g>
          <defs>
            <marker id="arrow1" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
              <polygon points="0 0, 10 3, 0 6" fill="#5B8FA3" />
            </marker>
            <marker id="arrow2" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
              <polygon points="0 0, 10 3, 0 6" fill="#5B8FA3" />
            </marker>
            <marker id="arrow3" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
              <polygon points="0 0, 10 3, 0 6" fill="#5B8FA3" />
            </marker>
          </defs>
        </svg>
      ),
    },
  ]

  return (
    <AnimatedDiagram
      steps={steps}
      stepDuration={1200}
      size="primary"
      diagramId="screen-flow"
    />
  )
}

// Wrapper component for use in MDX with PrimaryVisual
export function ScreenFlowDiagramWithControls() {
  return (
    <PrimaryVisual
      title="From Data to Light"
      caption="The journey from digital numbers to visible pixels on screen"
      diagramId="screen-flow"
    >
      <ScreenFlowDiagram />
    </PrimaryVisual>
  )
}
