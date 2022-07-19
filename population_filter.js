let xhr=new XMLHttpRequest()
xhr.open("GET","https://restcountries.com/v2/all")

xhr.onload=function(){
if(xhr.status>=200 && xhr.status<300){
    let data=JSON.parse(this.response)
    let countr_name=data.filter((ele)=>{
        return Number(ele.population)<200000
    })
    console.log(countr_name)
}
else{
    console.log("NO contry")
}
}
xhr.send()


// (62) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
// 0: {name: 'Åland Islands', topLevelDomain: Array(1), alpha2Code: 'AX', alpha3Code: 'ALA', callingCodes: Array(1), …}
// 1: {name: 'American Samoa', topLevelDomain: Array(1), alpha2Code: 'AS', alpha3Code: 'ASM', callingCodes: Array(1), …}
// 2: {name: 'Andorra', topLevelDomain: Array(1), alpha2Code: 'AD', alpha3Code: 'AND', callingCodes: Array(1), …}
// 3: {name: 'Anguilla', topLevelDomain: Array(1), alpha2Code: 'AI', alpha3Code: 'AIA', callingCodes: Array(1), …}
// 4: {name: 'Antarctica', topLevelDomain: Array(1), alpha2Code: 'AQ', alpha3Code: 'ATA', callingCodes: Array(1), …}
// 5: {name: 'Antigua and Barbuda', topLevelDomain: Array(1), alpha2Code: 'AG', alpha3Code: 'ATG', callingCodes: Array(1), …}
// 6: {name: 'Aruba', topLevelDomain: Array(1), alpha2Code: 'AW', alpha3Code: 'ABW', callingCodes: Array(1), …}
// 7: {name: 'Bermuda', topLevelDomain: Array(1), alpha2Code: 'BM', alpha3Code: 'BMU', callingCodes: Array(1), …}
// 8: {name: 'Bonaire, Sint Eustatius and Saba', topLevelDomain: Array(2), alpha2Code: 'BQ', alpha3Code: 'BES', callingCodes: Array(1), …}
// 9: {name: 'Bouvet Island', topLevelDomain: Array(1), alpha2Code: 'BV', alpha3Code: 'BVT', callingCodes: Array(1), …}
// 10: {name: 'British Indian Ocean Territory', topLevelDomain: Array(1), alpha2Code: 'IO', alpha3Code: 'IOT', callingCodes: Array(1), …}
// 11: {name: 'United States Minor Outlying Islands', topLevelDomain: Array(1), alpha2Code: 'UM', alpha3Code: 'UMI', callingCodes: Array(1), …}
// 12: {name: 'Virgin Islands (British)', topLevelDomain: Array(1), alpha2Code: 'VG', alpha3Code: 'VGB', callingCodes: Array(1), …}
// 13: {name: 'Virgin Islands (U.S.)', topLevelDomain: Array(1), alpha2Code: 'VI', alpha3Code: 'VIR', callingCodes: Array(1), …}
// 14: {name: 'Cayman Islands', topLevelDomain: Array(1), alpha2Code: 'KY', alpha3Code: 'CYM', callingCodes: Array(1), …}
// 15: {name: 'Christmas Island', topLevelDomain: Array(1), alpha2Code: 'CX', alpha3Code: 'CXR', callingCodes: Array(1), …}
// 16: {name: 'Cocos (Keeling) Islands', topLevelDomain: Array(1), alpha2Code: 'CC', alpha3Code: 'CCK', callingCodes: Array(1), …}
// 17: {name: 'Cook Islands', topLevelDomain: Array(1), alpha2Code: 'CK', alpha3Code: 'COK', callingCodes: Array(1), …}
// 18: {name: 'Curaçao', topLevelDomain: Array(1), alpha2Code: 'CW', alpha3Code: 'CUW', callingCodes: Array(1), …}
// 19: {name: 'Dominica', topLevelDomain: Array(1), alpha2Code: 'DM', alpha3Code: 'DMA', callingCodes: Array(1), …}
// 20: {name: 'Falkland Islands (Malvinas)', topLevelDomain: Array(1), alpha2Code: 'FK', alpha3Code: 'FLK', callingCodes: Array(1), …}
// 21: {name: 'Faroe Islands', topLevelDomain: Array(1), alpha2Code: 'FO', alpha3Code: 'FRO', callingCodes: Array(1), …}
// 22: {name: 'French Southern Territories', topLevelDomain: Array(1), alpha2Code: 'TF', alpha3Code: 'ATF', callingCodes: Array(1), …}
// 23: {name: 'Gibraltar', topLevelDomain: Array(1), alpha2Code: 'GI', alpha3Code: 'GIB', callingCodes: Array(1), …}
// 24: {name: 'Greenland', topLevelDomain: Array(1), alpha2Code: 'GL', alpha3Code: 'GRL', callingCodes: Array(1), …}
// 25: {name: 'Grenada', topLevelDomain: Array(1), alpha2Code: 'GD', alpha3Code: 'GRD', callingCodes: Array(1), …}
// 26: {name: 'Guam', topLevelDomain: Array(1), alpha2Code: 'GU', alpha3Code: 'GUM', callingCodes: Array(1), …}
// 27: {name: 'Guernsey', topLevelDomain: Array(1), alpha2Code: 'GG', alpha3Code: 'GGY', callingCodes: Array(1), …}
// 28: {name: 'Heard Island and McDonald Islands', topLevelDomain: Array(2), alpha2Code: 'HM', alpha3Code: 'HMD', callingCodes: Array(1), …}
// 29: {name: 'Vatican City', topLevelDomain: Array(1), alpha2Code: 'VA', alpha3Code: 'VAT', callingCodes: Array(1), …}
// 30: {name: 'Isle of Man', topLevelDomain: Array(1), alpha2Code: 'IM', alpha3Code: 'IMN', callingCodes: Array(1), …}
// 31: {name: 'Jersey', topLevelDomain: Array(1), alpha2Code: 'JE', alpha3Code: 'JEY', callingCodes: Array(1), …}
// 32: {name: 'Kiribati', topLevelDomain: Array(1), alpha2Code: 'KI', alpha3Code: 'KIR', callingCodes: Array(1), …}
// 33: {name: 'Liechtenstein', topLevelDomain: Array(1), alpha2Code: 'LI', alpha3Code: 'LIE', callingCodes: Array(1), …}
// 34: {name: 'Marshall Islands', topLevelDomain: Array(1), alpha2Code: 'MH', alpha3Code: 'MHL', callingCodes: Array(1), …}
// 35: {name: 'Micronesia (Federated States of)', topLevelDomain: Array(1), alpha2Code: 'FM', alpha3Code: 'FSM', callingCodes: Array(1), …}
// 36: {name: 'Monaco', topLevelDomain: Array(1), alpha2Code: 'MC', alpha3Code: 'MCO', callingCodes: Array(1), …}
// 37: {name: 'Montserrat', topLevelDomain: Array(1), alpha2Code: 'MS', alpha3Code: 'MSR', callingCodes: Array(1), …}
// 38: {name: 'Nauru', topLevelDomain: Array(1), alpha2Code: 'NR', alpha3Code: 'NRU', callingCodes: Array(1), …}
// 39: {name: 'Niue', topLevelDomain: Array(1), alpha2Code: 'NU', alpha3Code: 'NIU', callingCodes: Array(1), …}
// 40: {name: 'Norfolk Island', topLevelDomain: Array(1), alpha2Code: 'NF', alpha3Code: 'NFK', callingCodes: Array(1), …}
// 41: {name: 'Northern Mariana Islands', topLevelDomain: Array(1), alpha2Code: 'MP', alpha3Code: 'MNP', callingCodes: Array(1), …}
// 42: {name: 'Palau', topLevelDomain: Array(1), alpha2Code: 'PW', alpha3Code: 'PLW', callingCodes: Array(1), …}
// 43: {name: 'Pitcairn', topLevelDomain: Array(1), alpha2Code: 'PN', alpha3Code: 'PCN', callingCodes: Array(1), …}
// 44: {name: 'Saint Barthélemy', topLevelDomain: Array(1), alpha2Code: 'BL', alpha3Code: 'BLM', callingCodes: Array(1), …}
// 45: {name: 'Saint Helena, Ascension and Tristan da Cunha', topLevelDomain: Array(1), alpha2Code: 'SH', alpha3Code: 'SHN', callingCodes: Array(1), …}
// 46: {name: 'Saint Kitts and Nevis', topLevelDomain: Array(1), alpha2Code: 'KN', alpha3Code: 'KNA', callingCodes: Array(1), …}
// 47: {name: 'Saint Lucia', topLevelDomain: Array(1), alpha2Code: 'LC', alpha3Code: 'LCA', callingCodes: Array(1), …}
// 48: {name: 'Saint Martin (French part)', topLevelDomain: Array(3), alpha2Code: 'MF', alpha3Code: 'MAF', callingCodes: Array(1), …}
// 49: {name: 'Saint Pierre and Miquelon', topLevelDomain: Array(1), alpha2Code: 'PM', alpha3Code: 'SPM', callingCodes: Array(1), …}
// 50: {name: 'Saint Vincent and the Grenadines', topLevelDomain: Array(1), alpha2Code: 'VC', alpha3Code: 'VCT', callingCodes: Array(1), …}
// 51: {name: 'Samoa', topLevelDomain: Array(1), alpha2Code: 'WS', alpha3Code: 'WSM', callingCodes: Array(1), …}
// 52: {name: 'San Marino', topLevelDomain: Array(1), alpha2Code: 'SM', alpha3Code: 'SMR', callingCodes: Array(1), …}
// 53: {name: 'Seychelles', topLevelDomain: Array(1), alpha2Code: 'SC', alpha3Code: 'SYC', callingCodes: Array(1), …}
// 54: {name: 'Sint Maarten (Dutch part)', topLevelDomain: Array(1), alpha2Code: 'SX', alpha3Code: 'SXM', callingCodes: Array(1), …}
// 55: {name: 'South Georgia and the South Sandwich Islands', topLevelDomain: Array(1), alpha2Code: 'GS', alpha3Code: 'SGS', callingCodes: Array(1), …}
// 56: {name: 'Svalbard and Jan Mayen', topLevelDomain: Array(1), alpha2Code: 'SJ', alpha3Code: 'SJM', callingCodes: Array(1), …}
// 57: {name: 'Tokelau', topLevelDomain: Array(1), alpha2Code: 'TK', alpha3Code: 'TKL', callingCodes: Array(1), …}
// 58: {name: 'Tonga', topLevelDomain: Array(1), alpha2Code: 'TO', alpha3Code: 'TON', callingCodes: Array(1), …}
// 59: {name: 'Turks and Caicos Islands', topLevelDomain: Array(1), alpha2Code: 'TC', alpha3Code: 'TCA', callingCodes: Array(1), …}
// 60: {name: 'Tuvalu', topLevelDomain: Array(1), alpha2Code: 'TV', alpha3Code: 'TUV', callingCodes: Array(1), …}
// 61: {name: 'Wallis and Futuna', topLevelDomain: Array(1), alpha2Code: 'WF', alpha3Code: 'WLF', callingCodes: Array(1), …}
// length: 62
// [[Prototype]]: Array(0)