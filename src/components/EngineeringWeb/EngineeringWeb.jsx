import './EngineeringWeb.css';

const CX = 250;
const CY = 250;
const MAX_RADIUS = 165; 

const nodes = [
  { title: 'Research',      desc: 'Paper reading & experimentation', angle: -90, proficiency: 70 },
  { title: 'Full Stack',    desc: 'Frontend, Backend & APIs',        angle: -18, proficiency: 90 },
  { title: 'Agentic AI',    desc: 'Multi-agent systems',             angle: 54,  proficiency: 85 },
  { title: 'RAG',           desc: 'Retrieval & embeddings',          angle: 126, proficiency: 80 },
  { title: 'Machine\nLearning', desc: 'Models & evaluation',         angle: 198, proficiency: 80 },
];

const toRad = (deg) => (deg * Math.PI) / 180;

const getPos = (angle, proficiency = 100) => {
  const distance = (proficiency / 100) * MAX_RADIUS;
  return {
    x: CX + distance * Math.cos(toRad(angle)),
    y: CY + distance * Math.sin(toRad(angle)),
  };
};

export default function EngineeringWeb() {
  // 1. The Polygon uses the actual proficiency scores
  const polygonPoints = nodes
    .map((node) => {
      const pos = getPos(node.angle, node.proficiency);
      return `${pos.x},${pos.y}`;
    })
    .join(' ');

  return (
    <div className="engineering-web">
      <svg viewBox="0 0 500 500" className="radar-svg" aria-hidden="true">
        {/* Background rings - Increased opacity to 0.35 for better visibility */}
        {[60, 110, 160].map((r) => (
          <circle
            key={`ring-${r}`}
            cx={CX} cy={CY} r={r}
            fill="none"
            stroke="rgba(139,92,246,0.35)" 
            strokeWidth="1.5"
            strokeDasharray="4 6"
          />
        ))}

        {/* Background spokes */}
        {nodes.map((node) => {
          const maxPos = getPos(node.angle, 100); 
          return (
            <line
              key={`spoke-${node.title}`}
              x1={CX} y1={CY}
              x2={maxPos.x} y2={maxPos.y}
              stroke="rgba(139,92,246,0.25)"
              strokeWidth="1.5"
            />
          );
        })}

        {/* The colored proficiency polygon */}
        <polygon
          points={polygonPoints}
          fill="rgba(139,92,246,0.25)"
          stroke="rgba(139,92,246,0.9)"
          strokeWidth="2"
          style={{ transition: 'all 0.5s ease-in-out' }}
        />

        {/* Center dots */}
        <circle cx={CX} cy={CY} r="7" fill="#8b5cf6" className="radar-center-pulse" />
        <circle cx={CX} cy={CY} r="3" fill="#fff" />
      </svg>

      {/* Interactive Node Elements */}
      <div className="nodes-container" role="group" aria-label="Engineering Skills Radar">
        {nodes.map((node) => {
          // 2. FIXED: Always pass 100 here so the labels stay on the outer ring
          const pos = getPos(node.angle, 100);
          const pct = (v) => `${(v / 500) * 100}%`;
          const titleLines = node.title.split('\n');

          return (
            <div
              key={`node-${node.title}`}
              className="web-node"
              style={{ left: pct(pos.x), top: pct(pos.y) }}
              tabIndex={0}
              aria-label={`${node.title.replace('\n', ' ')} proficiency: ${node.proficiency}%. ${node.desc}`}
            >
              <div className="node-dot" aria-hidden="true" />
              <span className="node-label" aria-hidden="true">
                {titleLines.map((line, i) => (
                  <span key={i}>
                    {line}
                    {i < titleLines.length - 1 && <br />}
                  </span>
                ))}
              </span>
              <div className="node-tooltip" role="tooltip">
                <strong>{node.proficiency}%</strong> - {node.desc}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}