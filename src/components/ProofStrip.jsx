import React from 'react';
import { siteData } from '../data/siteData';
import Reveal from './Reveal';
import CountUpNumber from './CountUpNumber';

export default function ProofStrip() {
  return (
    <div className="proof-strip-wrapper" aria-label="Proof and accomplishments">
      <div className="container">
        <div className="proof-strip-grid">
          {siteData.proof.map((item, index) => (
            <Reveal
              key={item.id || index}
              staggerIndex={index}
              className="proof-strip-item"
            >
              <span className="proof-bullet">•</span>
              <span className="proof-text">
                {item.parts ? (
                  item.parts.map((part, pIdx) =>
                    part.type === 'number' ? (
                      <CountUpNumber
                        key={pIdx}
                        value={part.value}
                        suffix={part.suffix}
                        duration={1600}
                        minWidth={`${String(part.value).length + 0.2}ch`}
                      />
                    ) : (
                      <span key={pIdx}>{part.value}</span>
                    )
                  )
                ) : (
                  <span>{item.raw || item}</span>
                )}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
