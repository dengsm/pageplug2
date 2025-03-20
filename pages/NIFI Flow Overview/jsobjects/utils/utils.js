export default {
	succ_sf: list => R.prop('cnt', R.find(R.propEq('success', 'job_result'), list)),
	fail_sf: list => R.prop('cnt', R.find(R.propEq('fail', 'job_result'), list)),
}