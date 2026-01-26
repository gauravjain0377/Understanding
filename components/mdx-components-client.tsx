import React from 'react'
import type { MDXComponents } from 'mdx/types'
import InputFlowDiagram from './visuals/InputFlowDiagram'
import StateLayersDiagram from './visuals/StateLayersDiagram'
import AsyncTimelineDiagram from './visuals/AsyncTimelineDiagram'
import ClickToResultDiagram from './visuals/ClickToResultDiagram'
import ScreenGridDiagram from './visuals/ScreenGridDiagram'
import PrimaryVisual from './diagrams/PrimaryVisual'
import SecondaryVisual from './diagrams/SecondaryVisual'
import ClosingInsight from './ClosingInsight'
import ScreenFlowDiagram from './visuals/ScreenFlowDiagram'
import ColorSpaceFlowDiagram from './visuals/ColorSpaceFlowDiagram'
import BezierCurveDiagram from './visuals/BezierCurveDiagram'
import ContrastPerceptionDiagram from './visuals/ContrastPerceptionDiagram'
import InternetRoutingDiagram from './visuals/InternetRoutingDiagram'
import NeuralNetworkDiagram from './visuals/NeuralNetworkDiagram'
import CompressionDiagram from './visuals/CompressionDiagram'
import EventLoopDiagram from './visuals/EventLoopDiagram'
import BlendingModesDiagram from './visuals/BlendingModesDiagram'
import RasterizationDiagram from './visuals/RasterizationDiagram'
import GpuModelDiagram from './visuals/GpuModelDiagram'
import BrowserInternalsDiagram from './visuals/BrowserInternalsDiagram'
import BitsBinaryDiagram from './visuals/BitsBinaryDiagram'
import LexingDiagram from './visuals/LexingDiagram'
import ParsingDiagram from './visuals/ParsingDiagram'
import AstDiagram from './visuals/AstDiagram'
import TypeCheckingDiagram from './visuals/TypeCheckingDiagram'
import CompilationVsInterpretationDiagram from './visuals/CompilationVsInterpretationDiagram'
import OptimizationDiagram from './visuals/OptimizationDiagram'
import CognitiveLoadDiagram from './visuals/CognitiveLoadDiagram'
import FeedbackLoopsDiagram from './visuals/FeedbackLoopsDiagram'
import PerceivedPerformanceDiagram from './visuals/PerceivedPerformanceDiagram'
import AbstractionLayersDiagram from './visuals/AbstractionLayersDiagram'
import LeakyAbstractionDiagram from './visuals/LeakyAbstractionDiagram'
import EmergentBehaviorDiagram from './visuals/EmergentBehaviorDiagram'
import ShadersDiagram from './visuals/ShadersDiagram'
import TransformationsDiagram from './visuals/TransformationsDiagram'
import TransformersDiagram from './visuals/TransformersDiagram'
import LatencyDiagram from './visuals/LatencyDiagram'
import FramesDiagram from './visuals/FramesDiagram'
import RegularExpressionsDiagram from './visuals/RegularExpressionsDiagram'
import ColorModelsDiagram from './visuals/ColorModelsDiagram'

const defaultMdxComponents: MDXComponents = {
  a: 'a',
  blockquote: 'blockquote',
  br: 'br',
  code: 'code',
  div: 'div',
  em: 'em',
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  hr: 'hr',
  img: 'img',
  li: 'li',
  ol: 'ol',
  p: 'p',
  pre: 'pre',
  span: 'span',
  strong: 'strong',
  ul: 'ul',
}

// Create components object with validation
const components = {
  InputFlowDiagram,
  StateLayersDiagram,
  AsyncTimelineDiagram,
  ClickToResultDiagram,
  ScreenGridDiagram,
  ScreenFlowDiagram,
  ColorSpaceFlowDiagram,
  BezierCurveDiagram,
  ContrastPerceptionDiagram,
  InternetRoutingDiagram,
  NeuralNetworkDiagram,
  CompressionDiagram,
  EventLoopDiagram,
  BlendingModesDiagram,
  RasterizationDiagram,
  GpuModelDiagram,
  BrowserInternalsDiagram,
  BitsBinaryDiagram,
  LexingDiagram,
  ParsingDiagram,
  AstDiagram,
  TypeCheckingDiagram,
  CompilationVsInterpretationDiagram,
  OptimizationDiagram,
  CognitiveLoadDiagram,
  FeedbackLoopsDiagram,
  PerceivedPerformanceDiagram,
  AbstractionLayersDiagram,
  LeakyAbstractionDiagram,
  EmergentBehaviorDiagram,
  ShadersDiagram,
  TransformationsDiagram,
  TransformersDiagram,
  LatencyDiagram,
  FramesDiagram,
  RegularExpressionsDiagram,
  ColorModelsDiagram,
  PrimaryVisual,
  SecondaryVisual,
  ClosingInsight,
}

// Validate all components are defined
const undefinedComponents = Object.entries(components)
  .filter(([_, component]) => !component)
  .map(([name]) => name)

if (undefinedComponents.length > 0) {
  throw new Error(
    `The following MDX components are undefined: ${undefinedComponents.join(', ')}. ` +
    `Check if they are properly exported from their respective files.`
  )
}

export const mdxComponents: MDXComponents = {
  ...defaultMdxComponents,
  h2: ({ children, ...props }: any) => (
    <h2 className="progressive-reveal-target" {...props}>{children}</h2>
  ),
  h3: ({ children, ...props }: any) => (
    <h3 className="progressive-reveal-target" {...props}>{children}</h3>
  ),
  p: ({ children, ...props }: any) => (
    <p className="progressive-reveal-target" {...props}>{children}</p>
  ),
  ...components,
}
