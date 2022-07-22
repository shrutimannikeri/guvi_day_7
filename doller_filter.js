let xhr = new XMLHttpRequest();

xhr.open("GET", "https://restcountries.com/v2/all");
xhr.onload = function () {
  if (xhr.status >= 200 && xhr.status < 300) {
    let data = JSON.parse(this.response);
    // let nexval=data.reduce(function(ele){
    //     return ele.includes("USD")===true
    // })
    let nexval = [];
    console.log(data.length)
    for (let i = 0; i < data.length; i++) {
      let y = data[i].currencies;
      if (y !== undefined) {
        for(let j=0;j<y.length;j++){
            if(y[j].symbol==="$"){
                nexval.push(data[i])
            }
        }
       
      }
    }
    console.log(nexval);
  } else {
    console.log("No data");
  }
};
xhr.send();


// output:

// (71) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
// 0: {name: 'American Samoa', topLevelDomain: Array(1), alpha2Code: 'AS', alpha3Code: 'ASM', callingCodes: Array(1), …}
// 1: {name: 'Anguilla', topLevelDomain: Array(1), alpha2Code: 'AI', alpha3Code: 'AIA', callingCodes: Array(1), …}
// 2: {name: 'Antigua and Barbuda', topLevelDomain: Array(1), alpha2Code: 'AG', alpha3Code: 'ATG', callingCodes: Array(1), …}
// 3: {name: 'Argentina', topLevelDomain: Array(1), alpha2Code: 'AR', alpha3Code: 'ARG', callingCodes: Array(1), …}
// 4: {name: 'Australia', topLevelDomain: Array(1), alpha2Code: 'AU', alpha3Code: 'AUS', callingCodes: Array(1), …}
// 5: {name: 'Bahamas', topLevelDomain: Array(1), alpha2Code: 'BS', alpha3Code: 'BHS', callingCodes: Array(1), …}
// 6: {name: 'Barbados', topLevelDomain: Array(1), alpha2Code: 'BB', alpha3Code: 'BRB', callingCodes: Array(1), …}
// 7: {name: 'Belize', topLevelDomain: Array(1), alpha2Code: 'BZ', alpha3Code: 'BLZ', callingCodes: Array(1), …}
// 8: {name: 'Bermuda', topLevelDomain: Array(1), alpha2Code: 'BM', alpha3Code: 'BMU', callingCodes: Array(1), …}
// 9: {name: 'Bonaire, Sint Eustatius and Saba', topLevelDomain: Array(2), alpha2Code: 'BQ', alpha3Code: 'BES', callingCodes: Array(1), …}
// 10: {name: 'British Indian Ocean Territory', topLevelDomain: Array(1), alpha2Code: 'IO', alpha3Code: 'IOT', callingCodes: Array(1), …}
// 11: {name: 'Virgin Islands (British)', topLevelDomain: Array(1), alpha2Code: 'VG', alpha3Code: 'VGB', callingCodes: Array(1), …}
// 12: {name: 'Virgin Islands (U.S.)', topLevelDomain: Array(1), alpha2Code: 'VI', alpha3Code: 'VIR', callingCodes: Array(1), …}
// 13: {name: 'Brunei Darussalam', topLevelDomain: Array(1), alpha2Code: 'BN', alpha3Code: 'BRN', callingCodes: Array(1), …}
// 14: {name: 'Brunei Darussalam', topLevelDomain: Array(1), alpha2Code: 'BN', alpha3Code: 'BRN', callingCodes: Array(1), …}
// 15: {name: 'Cambodia', topLevelDomain: Array(1), alpha2Code: 'KH', alpha3Code: 'KHM', callingCodes: Array(1), …}
// 16: {name: 'Canada', topLevelDomain: Array(1), alpha2Code: 'CA', alpha3Code: 'CAN', callingCodes: Array(1), …}
// 17: {name: 'Cayman Islands', topLevelDomain: Array(1), alpha2Code: 'KY', alpha3Code: 'CYM', callingCodes: Array(1), …}
// 18: {name: 'Chile', topLevelDomain: Array(1), alpha2Code: 'CL', alpha3Code: 'CHL', callingCodes: Array(1), …}
// 19: {name: 'Christmas Island', topLevelDomain: Array(1), alpha2Code: 'CX', alpha3Code: 'CXR', callingCodes: Array(1), …}
// 20: {name: 'Cocos (Keeling) Islands', topLevelDomain: Array(1), alpha2Code: 'CC', alpha3Code: 'CCK', callingCodes: Array(1), …}
// 21: {name: 'Colombia', topLevelDomain: Array(1), alpha2Code: 'CO', alpha3Code: 'COL', callingCodes: Array(1), …}
// 22: {name: 'Cook Islands', topLevelDomain: Array(1), alpha2Code: 'CK', alpha3Code: 'COK', callingCodes: Array(1), …}
// 23: {name: 'Cook Islands', topLevelDomain: Array(1), alpha2Code: 'CK', alpha3Code: 'COK', callingCodes: Array(1), …}
// 24: {name: 'Cuba', topLevelDomain: Array(1), alpha2Code: 'CU', alpha3Code: 'CUB', callingCodes: Array(1), …}
// 25: {name: 'Cuba', topLevelDomain: Array(1), alpha2Code: 'CU', alpha3Code: 'CUB', callingCodes: Array(1), …}
// 26: {name: 'Dominica', topLevelDomain: Array(1), alpha2Code: 'DM', alpha3Code: 'DMA', callingCodes: Array(1), …}
// 27: {name: 'Dominican Republic', topLevelDomain: Array(1), alpha2Code: 'DO', alpha3Code: 'DOM', callingCodes: Array(1), …}
// 28: {name: 'Ecuador', topLevelDomain: Array(1), alpha2Code: 'EC', alpha3Code: 'ECU', callingCodes: Array(1), …}
// 29: {name: 'El Salvador', topLevelDomain: Array(1), alpha2Code: 'SV', alpha3Code: 'SLV', callingCodes: Array(1), …}
// 30: {name: 'Fiji', topLevelDomain: Array(1), alpha2Code: 'FJ', alpha3Code: 'FJI', callingCodes: Array(1), …}
// 31: {name: 'Grenada', topLevelDomain: Array(1), alpha2Code: 'GD', alpha3Code: 'GRD', callingCodes: Array(1), …}
// 32: {name: 'Guam', topLevelDomain: Array(1), alpha2Code: 'GU', alpha3Code: 'GUM', callingCodes: Array(1), …}
// 33: {name: 'Guyana', topLevelDomain: Array(1), alpha2Code: 'GY', alpha3Code: 'GUY', callingCodes: Array(1), …}
// 34: {name: 'Heard Island and McDonald Islands', topLevelDomain: Array(2), alpha2Code: 'HM', alpha3Code: 'HMD', callingCodes: Array(1), …}
// 35: {name: 'Hong Kong', topLevelDomain: Array(1), alpha2Code: 'HK', alpha3Code: 'HKG', callingCodes: Array(1), …}
// 36: {name: 'Jamaica', topLevelDomain: Array(1), alpha2Code: 'JM', alpha3Code: 'JAM', callingCodes: Array(1), …}
// 37: {name: 'Kiribati', topLevelDomain: Array(1), alpha2Code: 'KI', alpha3Code: 'KIR', callingCodes: Array(1), …}
// 38: {name: 'Kiribati', topLevelDomain: Array(1), alpha2Code: 'KI', alpha3Code: 'KIR', callingCodes: Array(1), …}
// 39: {name: 'Liberia', topLevelDomain: Array(1), alpha2Code: 'LR', alpha3Code: 'LBR', callingCodes: Array(1), …}
// 40: {name: 'Marshall Islands', topLevelDomain: Array(1), alpha2Code: 'MH', alpha3Code: 'MHL', callingCodes: Array(1), …}
// 41: {name: 'Mexico', topLevelDomain: Array(1), alpha2Code: 'MX', alpha3Code: 'MEX', callingCodes: Array(1), …}
// 42: {name: 'Micronesia (Federated States of)', topLevelDomain: Array(1), alpha2Code: 'FM', alpha3Code: 'FSM', callingCodes: Array(1), …}
// 43: {name: 'Montserrat', topLevelDomain: Array(1), alpha2Code: 'MS', alpha3Code: 'MSR', callingCodes: Array(1), …}
// 44: {name: 'Namibia', topLevelDomain: Array(1), alpha2Code: 'NA', alpha3Code: 'NAM', callingCodes: Array(1), …}
// 45: {name: 'Nauru', topLevelDomain: Array(1), alpha2Code: 'NR', alpha3Code: 'NRU', callingCodes: Array(1), …}
// 46: {name: 'New Zealand', topLevelDomain: Array(1), alpha2Code: 'NZ', alpha3Code: 'NZL', callingCodes: Array(1), …}
// 47: {name: 'Niue', topLevelDomain: Array(1), alpha2Code: 'NU', alpha3Code: 'NIU', callingCodes: Array(1), …}
// 48: {name: 'Niue', topLevelDomain: Array(1), alpha2Code: 'NU', alpha3Code: 'NIU', callingCodes: Array(1), …}
// 49: {name: 'Norfolk Island', topLevelDomain: Array(1), alpha2Code: 'NF', alpha3Code: 'NFK', callingCodes: Array(1), …}
// 50: {name: 'Northern Mariana Islands', topLevelDomain: Array(1), alpha2Code: 'MP', alpha3Code: 'MNP', callingCodes: Array(1), …}
// 51: {name: 'Palau', topLevelDomain: Array(1), alpha2Code: 'PW', alpha3Code: 'PLW', callingCodes: Array(1), …}
// 52: {name: 'Panama', topLevelDomain: Array(1), alpha2Code: 'PA', alpha3Code: 'PAN', callingCodes: Array(1), …}
// 53: {name: 'Pitcairn', topLevelDomain: Array(1), alpha2Code: 'PN', alpha3Code: 'PCN', callingCodes: Array(1), …}
// 54: {name: 'Pitcairn', topLevelDomain: Array(1), alpha2Code: 'PN', alpha3Code: 'PCN', callingCodes: Array(1), …}
// 55: {name: 'Puerto Rico', topLevelDomain: Array(1), alpha2Code: 'PR', alpha3Code: 'PRI', callingCodes: Array(1), …}
// 56: {name: 'Saint Kitts and Nevis', topLevelDomain: Array(1), alpha2Code: 'KN', alpha3Code: 'KNA', callingCodes: Array(1), …}
// 57: {name: 'Saint Lucia', topLevelDomain: Array(1), alpha2Code: 'LC', alpha3Code: 'LCA', callingCodes: Array(1), …}
// 58: {name: 'Saint Vincent and the Grenadines', topLevelDomain: Array(1), alpha2Code: 'VC', alpha3Code: 'VCT', callingCodes: Array(1), …}
// 59: {name: 'Singapore', topLevelDomain: Array(1), alpha2Code: 'SG', alpha3Code: 'SGP', callingCodes: Array(1), …}
// 60: {name: 'Solomon Islands', topLevelDomain: Array(1), alpha2Code: 'SB', alpha3Code: 'SLB', callingCodes: Array(1), …}
// 61: {name: 'Suriname', topLevelDomain: Array(1), alpha2Code: 'SR', alpha3Code: 'SUR', callingCodes: Array(1), …}
// 62: {name: 'Taiwan', topLevelDomain: Array(1), alpha2Code: 'TW', alpha3Code: 'TWN', callingCodes: Array(1), …}
// 63: {name: 'Timor-Leste', topLevelDomain: Array(1), alpha2Code: 'TL', alpha3Code: 'TLS', callingCodes: Array(1), …}
// 64: {name: 'Tokelau', topLevelDomain: Array(1), alpha2Code: 'TK', alpha3Code: 'TKL', callingCodes: Array(1), …}
// 65: {name: 'Trinidad and Tobago', topLevelDomain: Array(1), alpha2Code: 'TT', alpha3Code: 'TTO', callingCodes: Array(1), …}
// 66: {name: 'Turks and Caicos Islands', topLevelDomain: Array(1), alpha2Code: 'TC', alpha3Code: 'TCA', callingCodes: Array(1), …}
// 67: {name: 'Tuvalu', topLevelDomain: Array(1), alpha2Code: 'TV', alpha3Code: 'TUV', callingCodes: Array(1), …}
// 68: {name: 'Tuvalu', topLevelDomain: Array(1), alpha2Code: 'TV', alpha3Code: 'TUV', callingCodes: Array(1), …}
// 69: {name: 'United States of America', topLevelDomain: Array(1), alpha2Code: 'US', alpha3Code: 'USA', callingCodes: Array(1), …}
// 70: {name: 'Uruguay', topLevelDomain: Array(1), alpha2Code: 'UY', alpha3Code: 'URY', callingCodes: Array(1), …}
// length: 71
// [[Prototype]]: Array(0)
