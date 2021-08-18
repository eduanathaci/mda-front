import React, {useEffect} from "react";
import {connect} from "react-redux";
import {actions} from "@sagas/industries/arbk";
import Chart from "@common/Chart";
import {getDatasets} from "./utils";

function ARBK({
	fetchNrBizneseve,
	fetchNrBizneseveKomuna,
	fetchGjinia,
	fetchLlojiBiznesit,
	fetchLlojiBiznesitKomuna,
	fetchStatusiBizneseve,
	fetchSektoreBujqesi,
	nrBizneseve,
	gjinia,
	llojiBiznesit,
	statusiBizneseve,
	sektoreBujqesi,
	filters,
}) {
	useEffect(() => {
		fetchNrBizneseve(filters);
		fetchNrBizneseveKomuna(filters);
		fetchGjinia(filters);
		fetchLlojiBiznesit(filters);
		fetchLlojiBiznesitKomuna(filters);
		fetchStatusiBizneseve(filters);
		fetchSektoreBujqesi(filters);
	}, [
		fetchNrBizneseve,
		fetchNrBizneseveKomuna,
		fetchGjinia,
		fetchLlojiBiznesit,
		fetchLlojiBiznesitKomuna,
		fetchStatusiBizneseve,
		fetchSektoreBujqesi,
		filters,
	]);

	const nrBizneseveDataSets = getDatasets({
		filters,
		items: nrBizneseve,
		singleItemLabel: "Numri i bizneseve",
		property: "nrbizneseve",
	});

	const sektoreBujqesiDataSets = getDatasets({
		filters,
		items: sektoreBujqesi,
		singleItemLabel: "Numri i sektoreve ne bujqesi",
		property: "nrpunetoreve",
	});

	const statusiBizneseveDataSets = getDatasets({
		filters,
		items: statusiBizneseve,
		singleItemLabel: "",
		property: "countaktiv",
		isActiveNoActive: true,
	});

	const llojiBiznesitDataSets = getDatasets({
		filters,
		items: llojiBiznesit,
		singleItemLabel: "Numri i llojit te biznesit",
		property: "counter",
	});

	return (
		<>
			<Chart
				title="Sektore Bujqesi"
				type="bar"
				data={{
					labels: sektoreBujqesi?.map((item) => item.sektori?.substring(0, 10)),
					datasets: sektoreBujqesiDataSets,
				}}
				options={{
					plugins: {
						tooltip: {
							enabled: true,
							callbacks: {
								// TODO:
								footer: (items) => `Numri i punetoreve: 5, madhesia: 4`,
							},
						},
					},
				}}
			/>
			<Chart
				title="Numri Bizneseve"
				type="bar"
				data={{
					labels: nrBizneseve?.map((item) => item.viti),
					datasets: nrBizneseveDataSets,
				}}
			/>
			<Chart
				title="Statusi i biznesit"
				type="bar"
				data={{
					labels: statusiBizneseve?.map((item) => item.komunaemri),
					datasets: statusiBizneseveDataSets,
				}}
				options={{
					plugins: {
						tooltip: {
							enabled: true,
							callbacks: {
								// TODO:
								footer: (items) => `Aktiv: 5, Joaktiv: 4`,
							},
						},
					},
				}}
			/>
			<Chart
				title="Lloji Biznesit"
				type="bar"
				data={{
					labels: llojiBiznesit?.map((item) => item.llojibiznesit),
					datasets: llojiBiznesitDataSets,
				}}
				options={{
					plugins: {
						tooltip: {
							enabled: true,
							callbacks: {
								// TODO:
								footer: (items) => `Regjioni: test, Komuna: test, Vendbanimi: test`,
							},
						},
					},
				}}
			/>
		</>
	);
}

const mapDispatchToProps = {
	fetchNrBizneseve: actions.fetchNrBizneseve,
	fetchNrBizneseveKomuna: actions.fetchNrBizneseveKomuna,
	fetchGjinia: actions.fetchGjinia,
	fetchLlojiBiznesit: actions.fetchLlojiBiznesit,
	fetchLlojiBiznesitKomuna: actions.fetchLlojiBiznesitKomuna,
	fetchStatusiBizneseve: actions.fetchStatusiBizneseve,
	fetchSektoreBujqesi: actions.fetchSektoreBujqesi,
};
const mapStateToProps = (state) => ({
	nrBizneseve: state.app.industries.arbk.nrBizneseve,
	nrBizneseveKomuna: state.app.industries.arbk.nrBizneseveKomuna,
	gjinia: state.app.industries.arbk.gjinia,
	llojiBiznesit: state.app.industries.arbk.llojiBiznesit,
	llojiBiznesitKomuna: state.app.industries.arbk.llojiBiznesitKomuna,
	statusiBizneseve: state.app.industries.arbk.statusiBizneseve,
	sektoreBujqesi: state.app.industries.arbk.sektoreBujqesi,
});

export default connect(mapStateToProps, mapDispatchToProps)(ARBK);
