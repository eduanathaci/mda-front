const setIndustry = (filters, setShowGraph, showGraph) => {
	if (filters?.industria?.value) {
		setShowGraph(setKeyToTrue(showGraph, filters?.industria?.value));
	}
};

const setKeyToTrue = (object, key) => ({
	...Object.keys(object).reduce((result, k) => ({...result, [k]: false, [key]: true}), {}),
});

const showGraphInitialState = {
	UP: false,
	ATK: false,
	AKK: false,
	ARBK: false,
	AUV: false,
	MAPL: false,
	MASHT: false,
	MPBZhR: false,
	DOGANA: false,
};

export {setIndustry, showGraphInitialState};