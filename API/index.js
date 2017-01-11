
const API_URL = 'http://data.taipei/opendata/datalist/apiAccess';

const apiCall = (url,body) => {

    return  fetch(url+'?'+body, {
        method: "GET",
        headers: {
        },

    }).then(function(res) {
        if (res.ok) {
            return res.json();
        } else if (res.status == 401) {
            console.log("Oops! You are not authorized.");
        }
    }, function(e) {
        console.log("Error submitting form!");
    });


};

export const QueryMRT = () => {

		let scope="resourceAquire";
		let rid="55ec6d6e-dc5c-4268-a725-d04cc262172b";
    let body =`scope=${scope}&rid=${rid}`
    return apiCall(`${API_URL}`,body)
        .then(json => {
            return json
        });
};

