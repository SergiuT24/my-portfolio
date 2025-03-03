import { useCallback } from "react";
import type { Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
import { loadStarsPreset } from "tsparticles-preset-stars";

const ParticlesBackground = () => {
	const particlesInit = useCallback(async (engine: Engine) => {
		await loadStarsPreset(engine);
	}, []);

	return (
		<Particles
			id="tsparticles"
			init={particlesInit}
			options={{
				fullScreen: { enable: true, zIndex: -10 },
				preset: "stars",
				background: { color: "transparent" },
				particles: {
					size: {
						value: { min: 1, max: 1.2 },
					},
				},
			}}
			className="fixed top-0 left-0 w-full min-h-screen"
		/>
	);
};

export default ParticlesBackground;
