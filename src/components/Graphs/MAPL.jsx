import React, {useEffect} from "react";
import {connect} from "react-redux";
import {actions} from "@sagas/industries/mapl";

function MAPL({
	fetchAktivitetiKomunes,
	fetchAktivitetiTreguesit,
	aktivitetiKomunes,
	aktivitetiTreguesit,
	filters,
}) {
	useEffect(() => {
		fetchAktivitetiKomunes(filters);
		fetchAktivitetiTreguesit(filters);
	}, [fetchAktivitetiKomunes, fetchAktivitetiTreguesit, filters]);
	return <div></div>;
}

const mapDispatchToProps = {
	fetchAktivitetiKomunes: actions.fetchAktivitetiKomunes,
	fetchAktivitetiTreguesit: actions.fetchAktivitetiTreguesit,
};
const mapStateToProps = (state) => ({
	aktivitetiKomunes: state.app.industries.mapl.aktivitetiKomunes,
	aktivitetiTreguesit: state.app.industries.mapl.aktivitetiTreguesit,
});

export default connect(mapStateToProps, mapDispatchToProps)(MAPL);