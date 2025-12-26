import { useEffect, useRef } from "react";
import gsap from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(MotionPathPlugin);

const pins = [
  {
    year: "2012",
    title: "Di Pharma",
    align: "left",
    position: 0.92,
  },
  {
    year: "2014",
    title: "IndoContinental 7",
    align: "right",
    position: 0.79,
  },
  {
    year: "2017",
    title: "MJ7",
    align: "left",
    position: 0.65,
  },
  {
    year: "2025",
    title: "Di Wholesale",
    align: "left",
    position: 0.53,
  },
  {
    year: "coming soon",
    title: "Di polyclinic",
    align: "right",
    position: 0.4,
  },
  {
    year: "coming soon",
    title: "Di Laboratories",
    align: "right",
    position: 0.3,
  },
  {
    year: "coming soon",
    title: "Di Research",
    align: "right",
    position: 0.2,
  },
];

/* =======================
   ROAD PIN COMPONENT
======================= */
function RoadPin({ refProp, year, title }) {
  return (
    <g ref={refProp} opacity="0.35">
      {/* PIN ICON */}
      <path
        d="M12 2C7 2 3 6 3 11c0 7 9 15 9 15s9-8 9-15c0-5-4-9-9-9z"
        fill="#ffffff"
      />
      <circle cx="12" cy="11" r="4" fill="#2a3170" />

      {/* LABEL BELOW PIN */}
      <g transform={`translate(-50, 40)`}>
        {" "}
        {/* Center label under pin */}
        <rect width="120" height="54" rx="10" fill="#D7D7ED" />
        <text x="12" y="22" fontSize="11" fill="#1E1E1E" fontWeight="600">
          {year}
        </text>
        <text x="12" y="40" fontSize="12" fill="#1E1E1E">
          {title}
        </text>
      </g>
    </g>
  );
}

/* =======================
   PIN ACTIVE / INACTIVE
======================= */
const activatePin = (pin, active) => {
  gsap.to(pin, {
    opacity: active ? 1 : 0.35,
    scale: active ? 1.08 : 1,
    filter: active ? "drop-shadow(0 0 12px #D7D7ED)" : "none",
    transformOrigin: "center",
    duration: 0.3,
  });
};

/* =======================
   MAIN COMPONENT
======================= */
export default function FlightTimeline() {
  const planeRef = useRef(null);
  const pinRefs = useRef([]);
  pinRefs.current = [];

  const setPinRef = (el) => {
    if (el && !pinRefs.current.includes(el)) {
      pinRefs.current.push(el);
    }
  };

  useEffect(() => {
    /* PLACE PINS ON THE ROAD */
    pins.forEach((pin, index) => {
      gsap.set(pinRefs.current[index], {
        motionPath: {
          path: "#road-path",
          align: "#road-path",
          alignOrigin: [0.5, 0.26],
          start: pin.position,
          end: pin.position,
        },
      });
    });

    /* PLANE TIMELINE */
    // const reversedPins = [...pins].sort((a, b) => b.position - a.position);
    const FLIGHT_START = 1;
    const FLIGHT_END = 0.53;
    const FLIGHT_DISTANCE = FLIGHT_START - FLIGHT_END;

    const tl = gsap.timeline({
      onUpdate: () => {
        // Convert timeline progress → actual path progress
        const flightProgress = FLIGHT_START - tl.progress() * FLIGHT_DISTANCE;

        pinRefs.current.forEach((pinEl, index) => {
          const pinPos = pins[index].position;

          // Activate pins already passed by plane
          const isActive = flightProgress <= pinPos;

          activatePin(pinEl, isActive);
        });
      },
    });

    tl.to(planeRef.current, {
      duration: 5,
      ease: "power2.inOut",
      motionPath: {
        path: "#road-path",
        align: "#road-path",
        autoRotate: -130,
        alignOrigin: [0.5, 0.5],
        start: FLIGHT_START,
        end: FLIGHT_END,
      },
    });
  }, []);

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0, // behind content
        pointerEvents: "none",
      }}
    >
      <svg viewBox="0 0 1200 300" width="100%" height="100%">
        {/* ROAD GLOW */}
        <path
          d="M -10 400 C 300 450, 510 100, 650 10 S 1000 -40, 1200 -40"
          stroke="#2a3170"
          strokeWidth="80"
          fill="none"
        />

        {/* ROAD BASE */}
        <path
          d="M -10 400 C 300 450, 510 100, 650 10 S 1000 -40, 1200 -40"
          stroke="#323b8f"
          strokeWidth="70"
          fill="none"
        />

        {/* CENTER DASH */}
        <path
          id="road-path"
          d="M 0 400 C 300 450, 510 100, 650 10 S 1000 -40, 1200 -40"
          stroke="#9fa7d8"
          strokeWidth="4"
          strokeDasharray="14 14"
          fill="none"
        />

        {/* PINS */}
        {pins.map((pin, index) => (
          <RoadPin
            key={index}
            refProp={setPinRef}
            year={pin.year}
            title={pin.title}
            align={pin.align}
          />
        ))}

        {/* PLANE */}
        <g ref={planeRef}>
          <svg width="56" height="56" viewBox="0 0 67 64" fill="none">
            <path
              d="M9.42954 3.59867L4.72086 8.38223L11.8028 41.9504L1.86363 52.0477C0.545617 53.3866 -0.11858 55.1351 0.0171533 56.9083C0.152887 58.6815 1.07743 60.3343 2.58741 61.5031C4.09738 62.6718 6.06908 63.2608 8.06877 63.1405C10.0685 63.0201 11.9323 62.2003 13.2504 60.8613L23.4504 50.499L61.9153 52.1852L66.3606 47.6692L36.6049 37.1353L48.0375 25.521L61.5471 27.0826L66.5167 22.034L47.3137 16.0656L38.0499 0L33.0803 5.04856L36.6508 16.7074L25.0095 28.5338L9.42954 3.59867Z"
              fill="#c6c6d4ff"
            />
          </svg>
        </g>
      </svg>
    </div>
  );
}
